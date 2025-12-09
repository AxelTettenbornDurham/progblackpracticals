document.getElementById("clickButton1").addEventListener("click", async function (event) {
  try {
    const response = await fetch("http://127.0.0.1:8090/list");
    if (!response.ok) {
      throw new Error("List not returned correctly");
    }
    const responseText = await response.text();
    document.getElementById("showResult").innerHTML = responseText;
  } catch (e) {
    alert(e);
  }
});

document.getElementById("clickButton2").addEventListener("click", async function (event) {
  try {
    const response = await fetch("http://127.0.0.1:8090/image");
    if (!response.ok) {
      throw new Error("Image not returned correctly");
    }
    document.getElementById("foxImg").src = await response.text();
  } catch (e) {
    alert(e);
  }
});