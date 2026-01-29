function solve() {
  const exp = document.getElementById("expression").value;
  try {
    const result = math.evaluate(exp);
    document.getElementById("result").innerText = "Answer: " + result;
  } catch {
    document.getElementById("result").innerText = "Invalid expression ❌";
  }
}
