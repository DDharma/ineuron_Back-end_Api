from routes import app,request,cross_origin,render_template
from modules.connection import sql_connection



@app.route("/add_student",methods=["POST"])
@cross_origin()
def add_student():
    """[Adding new student on the the class]

    Returns:
        [str]: [added stundent name]
    """
    #Caling function to connecting database
    mydb = sql_connection()
    try:
        if request.method == "POST":

            StudentData = request.get_json()
            StudentName = StudentData["NAME"]
            StudentId   = StudentData["ID"]
            Batch       = StudentData["BATCH"]
            Branch      = StudentData['BRANCH']
            
            print(StudentData)

            mycursor = mydb.cursor()
            add_student_query = "INSERT INTO student_data_ineuron (STUDENT_ID, STUDENT_NAME, BRANCH,BATCH) VALUES (%s, %s, %s, %s)"
            add_student_data = (StudentId,StudentName,Branch,Batch)
            mycursor.execute(add_student_query, add_student_data)
            mydb.commit()
            mycursor.close()

            #Adding Student_Id For marks updating     
            mycursor = mydb.cursor()
            add_student_id_for_marks_query = "INSERT INTO student_id_marks (STUDENT_ID) VALUES (%s)"
            add_student_id_for_marks_data = (StudentId,)
            mycursor.execute(add_student_id_for_marks_query,add_student_id_for_marks_data)

            mydb.commit()
            mycursor.close()
            mydb.close()
            
    except Exception as e:
        return e
    return StudentData


@app.route("/batch_name",methods=["POST"])
@cross_origin()
def batch_name():
    print("------------------------------------")
    """[finding all the batch having perticular brach]

    Returns:
        [list]: [list of all the batches]
        """
    #Caling function to connecting database
    mydb = sql_connection()
    try:
        if request.method == "POST":
    
            StudentData   = request.get_json()
            StudentBranch = StudentData["BRANCH"]
                
            print(StudentData)

            mycursor = mydb.cursor()
            add_student_query = "SELECT BATCH FROM student_data_ineuron WHERE BRANCH = %s"
            add_student_data = (StudentBranch,)
            mycursor.execute(add_student_query, add_student_data)

            RetriveBatches = {}
            BatchList = []
            for i in mycursor:
                BatchList.append(i[0])
            
            RetriveBatches["BATCHES"] = BatchList
            print(RetriveBatches)

            mycursor.close()
            mydb.close()
            #SuccessReturn = (StudentName +" Is added into the system having ID = "+StudentId+" ,Brach = "+Branch+" and batch = "+Batch)
    except Exception as e:
        return e
    return RetriveBatches

@app.route("/student_name",methods=["POST"])
@cross_origin()
def student_name():
    print("------------------------------------")
    """[finding all the student having perticular batch]

    Returns:
        [list]: [list of all the student name]
        """
    #Caling function to connecting database
    mydb = sql_connection()
    try:
        if request.method == "POST":
    
            StudentData   = request.get_json()
            StudentBATCH = StudentData["BATCH"]
                
            print(StudentData)

            mycursor = mydb.cursor()
            add_student_query = "SELECT STUDENT_NAME FROM student_data_ineuron WHERE BATCH = %s"
            add_student_data = (StudentBATCH,)
            mycursor.execute(add_student_query, add_student_data)

            RetriveStudentName = {}
            NameList = []
            for i in mycursor:
                NameList.append(i[0])
            
            RetriveStudentName["NAME"] = NameList
            print(RetriveStudentName)

            mycursor.close()
            mydb.close()
            #SuccessReturn = (StudentName +" Is added into the system having ID = "+StudentId+" ,Brach = "+Branch+" and batch = "+Batch)
    except Exception as e:
        return e
    return RetriveStudentName


@app.route("/add_batch_time",methods=["POST"])
@cross_origin()
def add_batch_time():
    """[Adding new batch_time]

    Returns:
        [str]: [normal string]
    """
    #Caling function to connecting database
    mydb = sql_connection()
    try:
        if request.method == "POST":

            StudentBatchData = request.get_json()
            Time             = StudentBatchData["TIME"]
            MONDAY           = StudentBatchData["MONDAY"]
            TUESDAY          = StudentBatchData["TUESDAY"]
            WEDNESDAY        = StudentBatchData["WEDNESDAY"]
            THURSDAY         = StudentBatchData["THURSDAY"]
            FRIDAY           = StudentBatchData["FRIDAY"]
            
            print(StudentBatchData)

            mycursor = mydb.cursor()
            add_student_query =  "INSERT INTO student_batch_time (BTIME, MONDAY,TUESDAY,WEDNESDAY,THRUSDAY,FRIDAY) VALUES (%s,%s,%s,%s,%s,%s)"
            add_student_data = (Time,MONDAY,TUESDAY,WEDNESDAY,THURSDAY,FRIDAY)
            mycursor.execute(add_student_query, add_student_data)
            mydb.commit()
            mycursor.close()
            mydb.close()
            
    except Exception as e:
        return e
    return StudentBatchData

            
@app.route("/search",methods=["POST"])
@cross_origin()
def search():   

    """[Adding new batch_time]

    Returns:
        [str]: [normal string]
    """
    #Caling function to connecting database
    mydb = sql_connection()
    try:
        if request.method == "POST":

            StudentBatchData = request.get_json()
            StudentID        = StudentBatchData["STUDENTID"]

        
            print(StudentBatchData)

            mycursor = mydb.cursor()
            mycursor.execute("SELECT* FROM student_data_ineuron WHERE STUDENT_ID = {}".format(StudentID))
            print("select* from student_data_ineuron where STUDENT_ID = {}".format(StudentID))
            studentFullData = {
                "studentFullData": mycursor.fetchall()[0]
            }
            mycursor.close()
            mydb.close()
            
    except Exception as e:
        return str(e)
    return studentFullData


@app.route("/batchTime",methods=["GET"])
@cross_origin()
def batchTime():   
    """[showing  batch_time]

    Returns:
        [str]: [normal string]
    """
    #Caling function to connecting database
    mydb = sql_connection()
    try:
        if request.method == "GET":

           
            mycursor = mydb.cursor()
            mycursor.execute("SELECT* FROM student_batch_time")
            #print("select* from student_data_ineuron where STUDENT_ID = {}".format(StudentID))
            studentBatchTimeData = {
                "studentBatchTimeData": mycursor.fetchall()
            }
            mycursor.close()
            mydb.close()
            
    except Exception as e:
        return str(e)
    return studentBatchTimeData


@app.route("/topper",methods=["GET"])
@cross_origin()
def topper():   
    """[showing  batch_time]

    Returns:
        [str]: [normal string]
    """
    #Caling function to connecting database
    mydb = sql_connection()
    try:
        if request.method == "GET":

            toperNameList = []

            mycursor = mydb.cursor()
            mycursor.execute("select STUDENT_NAME from student_data_ineuron where STUDENT_ID = (select STUDENT_ID from student_id_marks where ME = (select max(ME) from student_id_marks))")      
            toperNameList.append(mycursor.fetchall()[0][0])
            mycursor.close()

            mycursor = mydb.cursor()
            mycursor.execute("select STUDENT_NAME from student_data_ineuron where STUDENT_ID = (select STUDENT_ID from student_id_marks where CSE = (select max(CSE) from student_id_marks))")      
            toperNameList.append(mycursor.fetchall()[0][0])
            mycursor.close()

            mycursor = mydb.cursor()
            mycursor.execute("select STUDENT_NAME from student_data_ineuron where STUDENT_ID = (select STUDENT_ID from student_id_marks where civil = (select max(civil) from student_id_marks))")      
            toperNameList.append(mycursor.fetchall()[0][0])
            mycursor.close()


            studentTopperData = {
                "Topper": toperNameList
            }

            print(studentTopperData)

            mycursor.close()
            mydb.close()
            
    except Exception as e:
        return str(e)
    return studentTopperData


#All the api which render the HTML all the html Files
#For home page
@app.route("/")
@cross_origin()
def index():
    return render_template("index.html")

@app.route("/system.html")
@cross_origin()
def system():
    return render_template("system.html")

@app.route("/mentor.html")
@cross_origin()
def system():
    return render_template("mentor.html")

@app.route("/about.html")
@cross_origin()
def system():
    return render_template("about.html")