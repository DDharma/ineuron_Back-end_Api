import mysql.connector
from mysql.connector import errorcode

def sql_connection():
    """[Make SQL data-base connection]

    Returns:
        [Object]: [Object of database connection -- mysql.connector.connect]
    """
    try:
        
        #AWS RDS Database
        mydb = mysql.connector.connect(
        host="ineurondatabase.ce2qr5zgmenf.us-east-2.rds.amazonaws.com",
        user="admin",
        password="qwertyuiop",
        database = "ineuron"
    )
      
        print("ineuron - Database is connected")
        print("Data_base connected")
        return mydb

    except mysql.connector.Error as e:
        if e.errno == errorcode.ER_ACCESS_DENIED_ERROR:
                return("Somthing wrong with user name and passward")
        elif e.errno == errorcode.ER_BAD_DB_ERROR:
                return("Databases not exist")
        else:
                return(e)




                