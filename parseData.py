import string

# Function parses Ottawa polygon data
def parseData():
    '''
    TYPE-CONTRACT: (file) -> dict 
    DESCRIPTION: Parses raw_ottawa_polygons.json file to extract each the region name and
    the longitude and latitude coordinates defining its regional boundary and
    adds them to a dictionary
    PREREQUISITES: File is formatted exactly as the GeoJSON file used for testing
    '''

    # Variable regionData is a dictionary with region names (given by variable 
    # regionName) as keys and an 2D list of longitude and latitude coordinates 
    # as dimensions for each sublist

    regionData = dict()
    regionName = ''

    # Constant punc helps parse punctuation according to what is in the dataset
    punc = '''""'':,'''

    with open('rawPolygons.json', 'r') as file:
        # Flag used to indicate progression point of single longitudinal coordinate
        longitudeReached = False
        for line in file:
            if len(regionData.values()) > 2:
                break
            if not line:
                break
            # Extracts region name
            elif ((line.find("Name") != -1) and not (line.find("Name_FR") != -1)):
                line = line.replace("Name", '')
                for char in line:
                    if char in punc:
                        line = line.replace(char, '')
                regionName = line.strip()
                regionData[regionName] = []
            # Skips French region names
            elif (line.find("Name_FR") != -1):
                continue
            # Ottawa's longitude is approx. -75 and after checking for "Name" occurrence where
            # a -ve sign (-) could be present (e.g., Beacon Hill South - Cardinal Heights),
            # another -ve sign (-) can only indicate an instance of a longitudinal coordinate
            elif ("-" in line):
                for char in line:
                    if char in punc:
                        line = line.replace(char, '')
                line = line.strip()
                longitude = str(line)
                # Flag keeps track of longitudinal coordinate position, which is useful because
                # latitude coordinate follows immediately afterwards
                longitudeReached = True
                continue
            elif (longitudeReached):
                line = line.strip()
                latitude = str(line)
                coords = '{ "lng": ' + longitude + ', "lat": ' + latitude + '}'
                regionData[regionName].append(coords)
                longitudeReached = False

    return regionData

print(parseData())