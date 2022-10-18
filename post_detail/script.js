var today = new Date();
document.getElementById("datetime").innerHTML =
  today.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }) +
  " " +
  today.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
