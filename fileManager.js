// fileManager.js

const fs = require("fs");

const fileName = "sample.txt";

// CREATE
fs.writeFile(fileName, "Hello! This is the Smart Utility Toolkit.", (err) => {

    if (err) {
        console.log("Error creating file:", err.message);
        return;
    }

    console.log("File created successfully.");

    // READ
    fs.readFile(fileName, "utf8", (err, data) => {

        if (err) {
            console.log("Error reading file:", err.message);
            return;
        }

        console.log("File content:", data);

        // UPDATE
        fs.appendFile(
            fileName,
            "\nThis content was added during the update operation.",
            (err) => {

                if (err) {
                    console.log("Error updating file:", err.message);
                    return;
                }

                console.log("File updated successfully.");

                // READ UPDATED FILE
                fs.readFile(fileName, "utf8", (err, updatedData) => {

                    if (err) {
                        console.log("Error reading updated file:", err.message);
                        return;
                    }

                    console.log("Updated content:");
                    console.log(updatedData);

                    // DELETE
                    fs.unlink(fileName, (err) => {

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