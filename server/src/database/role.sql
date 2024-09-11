CREATE TABLE Role (
    /* iDENTITY - GENERATE ID - RESEARCH */
    id int IDENTITY PRIMARY KEY,
    [description] NVARCHAR (25),
     see_process BOOLEAN,
     comment_process  BOOLEAN,
     create_project   BOOLEAN,
     
)