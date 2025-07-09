def Age_group_checker():
    age = get_age()

    if (age < 13):
        print("child.")
    elif (13 <= age < 20):
        print("Teen")
    elif (20 <= age < 60):
        print("Adult") 
    elif (age >= 60):
        print("senior") 
    else:
        print("Invalid age.")
Age_group_checker()  