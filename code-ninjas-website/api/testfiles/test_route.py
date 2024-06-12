from __main__ import api

@api.route('/test', methods=['GET'])
def test():
    return 'it works!'