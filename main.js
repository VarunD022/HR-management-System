<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hiring</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 20px; color: #333; }
        .container { max-width: 800px; margin: auto; }
        .title { text-align: center; color: #0a3d62; }
        .form { display: flex; flex-direction: column; }
        .form input, .form select, .form button { margin: 10px 0; padding: 10px; border-radius: 10px; }
    </style>
</head>
<body>
    <div class="container">
        <h2 class="title">Hiring Management</h2>
        <form class="form" id="hiringForm">
            <input type="text" id="applicantName" placeholder="Applicant Name">
            <select id="position">
                <option value="Software Engineer">Software Engineer</option>
                <option value="Product Manager">Product Manager</option>
                <option value="HR Specialist">HR Specialist</option>
            </select>
            <button type="button" onclick="addApplicant()">Add Applicant</button>
        </form>
        <div id="applicantList">
            <h3>Applicant List</h3>
            <!-- List of applicants -->
        </div>
        <a href="index.html">Back to Dashboard</a>
    </div>
    <script>
        // Hiring Management Script
        const applicantList = document.getElementById('applicantList');

        function addApplicant() {
            const name = document.getElementById('applicantName').value;
            const position = document.getElementById('position').value;
            if (name && position) {
                const applicantEntry = document.createElement('p');
                applicantEntry.textContent = `${name} - Position: ${position}`;
                applicantList.appendChild(applicantEntry);
            }
        }
    </script>
</body>
</html>
