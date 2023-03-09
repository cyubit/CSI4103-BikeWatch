import string
import json

# Function parses Ottawa polygon data and outputs dictionary of region names and their ONS IDs

def parseData():
    '''
    TYPE-CONTRACT: (file) -> dict
    DESCRIPTION: Parses raw_ottawa_polygons.json file to extract each the region name and
    its ONS ID and adds them to a dictionary
    PREREQUISITES: File is formatted exactly as the GeoJSON file used for testing
    '''

    # Variable regionData is a dictionary with region names (given by variable 
    # regionName) as keys and those region's ONS ID's as values

    regionData = dict()
    regionName = ''
    regionONSID = 0

    # Constant punc helps parse punctuation according to what is in the dataset
    punc = '''""'':,'''

    with open('rawPolygons.json', 'r') as file:
        for line in file:
            if not line:
                break
            # Parses ONS ID tag
            elif (line.find("ONS_ID") != -1):
                line = line.replace("ONS_ID", '')
                line = line.translate(str.maketrans('', '', string.punctuation))
                line = line.strip()
                regionONSID = int(line)
            # Parses Name tag
            elif ((line.find("Name") != -1) and not (line.find("Name_FR") != -1)):
                line = line.replace("Name", '')
                for char in line:
                    if char in punc:
                        line = line.replace(char, '')
                regionName = line.strip()
                regionData[regionName] = regionONSID
            # Skips French region names
            elif (line.find("Name_FR") != -1):
                continue

    with open("parsedONSID.json", "w") as outfile:
        json_object = json.dump(regionData, outfile)