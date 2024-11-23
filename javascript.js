document.getElementById("generateFile").addEventListener("click", function() {
    const fileContent = "This is a generated file. You can add more content here.";
    const blob = new Blob([fileContent], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "generated-file.txt";
    link.click();
});
