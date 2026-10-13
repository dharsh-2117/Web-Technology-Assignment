# Scenario 3 — Student Profile Portal (Servlet + JSP + JDBC)

This is a complete starter web application for the Web Technology assignment. It demonstrates:
- MySQL access through JDBC and prepared statements.
- Login/logout with an HTTP session.
- Student profile listing in JSP using a loop and conditional logic.
- Image/document streaming through a protected Servlet.
- Database-driven file links and safe path resolution.

## Requirements
- JDK 11 or later
- Apache Tomcat 9.x (this project uses `javax.servlet`, not Tomcat 10)
- Maven
- MySQL 8.x

## 1. Create database and tables
Run `src/main/resources/schema.sql` in MySQL/phpMyAdmin. The sample uses database `student_portal`.
It has sample students and file metadata. Add real uploaded files to the configured upload folder and update `stored_name`/`file_path` accordingly.

## 2. Configure environment variables before starting Tomcat
Set these variables in the environment used by Tomcat:
- `DB_URL` = `jdbc:mysql://localhost:3306/student_portal?useSSL=false&serverTimezone=UTC`
- `DB_USER` = your MySQL username (e.g. `root`)
- `DB_PASSWORD` = your MySQL password
- `PORTAL_USERNAME` = your chosen portal login username
- `PORTAL_PASSWORD` = a strong portal password
- `UPLOAD_DIR` = absolute folder path where uploaded files are stored, e.g. `C:/xampp/htdocs/student_management/uploads`

If variables are not set, the app uses local-development defaults (`student_portal`, `root`, blank DB password, `admin` / `ChangeMe123!`, and `C:/xampp/htdocs/student_management/uploads`). **Change the portal password and configure environment variables before using this beyond a local demo.**

The `file_path` column is metadata only; the Servlet resolves `stored_name` inside `UPLOAD_DIR`, preventing arbitrary paths from being read.

## 3. Build and deploy
From this folder run:
```bash
mvn clean package
```
Copy `target/student-portal.war` into Tomcat 9's `webapps` folder, start Tomcat, then open:
`http://localhost:8080/student-portal/login`

Login using your configured `PORTAL_USERNAME` and `PORTAL_PASSWORD`.

## 4. Database schema / existing Scenario 2
This Scenario 3 project uses its own sample schema so it can run independently of the PHP Scenario 2 database. If you want it to read Scenario 2's tables, adjust SQL column/table names in `StudentListServlet.java` and `FileServlet.java` to match your exact PHP schema.

## Notes
- Do not commit real student photos, certificates, ID documents, passwords, or other personal data to a public GitHub repository.
- Only allow trusted users to log in; use HTTPS if deployed on a network.
