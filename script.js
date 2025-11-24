// Accordion
document.querySelectorAll('.accordion-header').forEach(h => {
  h.onclick = () => {
    const content = h.nextElementSibling;
    document.querySelectorAll('.accordion-content').forEach(c => {
      if (c !== content) c.style.display = 'none';
    });
    content.style.display = content.style.display === 'block' ? 'none' : 'block';
  };
});

// Chatbot logic
const chatbot = document.getElementById("chatbot");
document.getElementById("chat-toggle").onclick = () => { chatbot.style.display = "block"; };
document.getElementById("chatbot-close").onclick = () => { chatbot.style.display = "none"; };

const chatMessages = document.getElementById("chat-messages");

function appendMessage(msg, cls) {
  let div = document.createElement('div');
  div.className = cls;
  div.textContent = msg;
  chatMessages.appendChild(div);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function getAIReply(msg) {
  msg = msg.toLowerCase();
  if(msg.includes("tỏi")) return "🧄 Tỏi Lý Sơn là đặc sản nổi tiếng của huyện đảo Lý Sơn, Quảng Ngãi, với củ nhỏ, trắng, thơm nồng và vị cay đặc trưng. Tỏi giàu allicin và các chất chống oxy hóa, tốt cho sức khỏe và hệ miễn dịch. Sản phẩm thường được dùng trong nấu ăn, làm gia vị hoặc chế biến thực phẩm chức năng.!";
  if(msg.includes("xoài")) return "🥭 Xoài Cát Hòa Lộc là đặc sản miền Nam nổi tiếng với vị ngọt đậm, thơm và thịt mềm mịn. Quả chín vàng, hạt nhỏ, rất được ưa chuộng trong nước và xuất khẩu. Xoài thường được ăn tươi, làm sinh tố hoặc chế biến món tráng miệng.";
  if(msg.includes("nhãn")) return "🍐 Nhãn Lồng Hưng Yên nổi tiếng với cùi dày, ngọt và thơm tự nhiên. Quả tròn, vỏ mỏng, hạt nhỏ, rất giàu dinh dưỡng. Đây là loại trái cây đặc sản được ưa chuộng trong nước và xuất khẩu.";
  if(msg.includes("vải")) return "🌸 Vải Lục Ngạn (Bắc Giang) nổi tiếng với quả tròn, mọng nước và vị ngọt thanh. Vỏ mỏng, dễ tách, hạt nhỏ, thích hợp ăn tươi và xuất khẩu. Đây là đặc sản mùa hè, được nhiều người yêu thích cả trong và ngoài nước.";
  if(msg.includes("cà phê")) return "☕ Cà phê Buôn Ma Thuột (Đắk Lắk) nổi tiếng với hương vị đậm đà, thơm nồng và chất lượng cao. Đây là vùng trồng cà phê lớn nhất Việt Nam, chủ yếu là giống Arabica và Robusta. Cà phê nơi đây thường được xuất khẩu và chế biến thành nhiều sản phẩm cao cấp.";
  if(msg.includes("rau má")) return "Rau má là loại rau thân thảo, mọc bò sát đất, có lá hình thùy tròn, thường được dùng làm thực phẩm và thuốc dân gian. Rau má nổi tiếng với khả năng thanh nhiệt, giải độc, mát gan và tốt cho da. Loại rau này giàu vitamin, khoáng chất và các chất chống oxy hóa. Rau má có thể ăn sống trong salad, ép lấy nước uống hoặc nấu canh, chè. Ở Việt Nam, rau má được ưa chuộng trong mùa hè nhờ tính mát và dễ chế biến.";
  return "🤖 Mình chưa rõ, bạn hãy hỏi về nông sản (tỏi, xoài, nhãn, vải, cà phê) hoặc công nghệ nhé!";
}

document.getElementById("chat-send").onclick = sendMessage;
document.getElementById("chat-input").onkeypress = e => { if(e.key==="Enter") sendMessage(); };

function sendMessage() {
  const input = document.getElementById("chat-input");
  const msg = input.value.trim();
  if(!msg) return;
  appendMessage(msg,'user');
  input.value = "";
  setTimeout(()=>appendMessage(getAIReply(msg),'ai'),500);
}
