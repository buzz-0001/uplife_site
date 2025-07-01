document.getElementById("entryForm").addEventListener("submit", function(event) {
    event.preventDefault(); // ページ遷移を防ぐ
  
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
  
    if (!name || !email || !message) {
      alert("全ての項目を入力してください。");
      return;
    }
  
    alert("ご応募ありがとうございます！");
    // フォームの送信処理（例：FormspreeやGASなど）を追加できます
  });