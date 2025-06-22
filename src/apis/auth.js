export async function login(email, password) {
  const response = await fetch("http://localhost:8081/Gangwon/Login.jsp", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      email,
      password,
    }),
    credentials: "include", // 쿠키 필수
  });

  const text = await response.text();
  return text;
}
