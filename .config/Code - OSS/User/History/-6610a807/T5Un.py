def build_profile(first, last, **user_info):
    """Build a dictionay"""
    profile = {}
    profile['first_name'] = first
    profile['last_name'] = last
    for key, value in user_info.items():
        profile[key] = value
    retur profile

user_profile = build_profile('albert', 'einstein', loaction='princeton',
                             field='physics')
print(user_profile)