// fileManager.js

const fs = require("fs")

// CREATE
fs.writeFile("data.txt", "Hello! This is the Smart Utility Toolkit.", (err) => {

    if (err) {
        console.log("Error creating file:", err.message);
        return;
    }

    console.log("File created successfully.");

    // READ
    fs.readFile("data.txt", "utf8", (err, data) => {

        if (err) {
            console.log("Error reading file:", err.message);
            return;
        }

        console.log("File content:", data);

        // UPDATE
        fs.appendFile(
            "data.txt",
            "\nThis content was added during the update operation.",
            (err) => {

                if (err) {
                    console.log("Error updating file:", err.message);
                    return;
                }

                console.log("File updated successfully.");

                // READ UPDATED FILE
                fs.readFile("data.txt", "utf8", (err, res) => {

                    if (err) {
                        console.log("Error reading updated file:", err.message);
                        return;
                    }
                    console.log(res);

                    // DELETE
                    fs.unlink("data.txt", (err) => {

                        if (err) {
                            console.log("Error deleting file:", err.message);
                            return;
                        }

                        console.log("File deleted successfully.");
                    });
                });
            }
        );
    });
});