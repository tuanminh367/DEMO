const physicsQuizExtensions = {
  "intro-physics": {
    multipleChoice: [
      ["Mục tiêu của Vật lí là tìm hiểu các quy luật chi phối:", ["Vận động của vật chất, năng lượng và tương tác giữa chúng", "Chỉ sự sống của sinh vật", "Chỉ các sự kiện lịch sử", "Chỉ cấu tạo của ngôn ngữ"], 0, "Vật lí tìm các quy luật tổng quát về vận động của vật chất, năng lượng và sự tương tác giữa chúng."],
      ["Giai đoạn tiền Vật lí chủ yếu dựa vào:", ["Thí nghiệm hiện đại có kiểm soát", "Quan sát tự nhiên và suy luận cảm tính", "Cơ học lượng tử", "Máy tính điện tử"], 1, "Trước khi phương pháp thực nghiệm phát triển, con người chủ yếu quan sát và suy luận theo cảm tính."],
      ["Thuyết tương đối và cơ học lượng tử thuộc sự phát triển của:", ["Tiền Vật lí", "Vật lí cổ điển", "Vật lí hiện đại", "Thiên văn học cổ đại"], 2, "Thuyết tương đối và cơ học lượng tử là những thành tựu của Vật lí hiện đại."],
      ["Động cơ điện và máy phát điện gắn gần nhất với nền tảng Vật lí nào?", ["Điện từ học", "Quang hình học", "Âm học", "Cơ học chất lưu"], 0, "Các thiết bị điện như động cơ và máy phát điện được phát triển dựa trên điện từ học."],
      ["Một mô hình toán học trong nghiên cứu Vật lí thường dùng để:", ["Thay thế mọi phép đo thực tế", "Mô tả, dự đoán hoặc giải thích hiện tượng", "Chứng minh mọi giả thuyết đều đúng", "Loại bỏ hoàn toàn sai số"], 1, "Mô hình toán học dùng công thức để mô tả quan hệ và hỗ trợ dự đoán, giải thích hiện tượng."],
      ["Nếu kết quả thí nghiệm không phù hợp với giả thuyết, nhà nghiên cứu nên:", ["Sửa số liệu cho khớp", "Xem xét lại giả thuyết và tiếp tục kiểm tra", "Bỏ qua kết quả", "Kết luận thí nghiệm luôn sai"], 1, "Kết quả không phù hợp là lí do để kiểm tra phép đo, xem lại giả thuyết hoặc thiết kế thí nghiệm."],
      ["Tia sáng và chất điểm là ví dụ về:", ["Mô hình lí thuyết", "Vật thể luôn quan sát được nguyên dạng", "Định luật bảo toàn", "Thiết bị đo điện"], 0, "Tia sáng và chất điểm là các mô hình lí thuyết đơn giản hóa để mô tả hiện tượng."],
      ["Kiến thức Vật lí có thể hỗ trợ trực tiếp cho ngành nào dưới đây?", ["Hóa học", "Ngữ pháp", "Lịch sử nghệ thuật", "Văn bản học"], 0, "Các kiến thức Vật lí góp phần giải thích nhiều hiện tượng trong Hóa học và các khoa học tự nhiên khác."],
      ["Sóng Wi‑Fi truyền thông tin chủ yếu nhờ:", ["Sóng điện từ", "Sóng địa chấn", "Dòng nước", "Âm thanh trong dây dẫn"], 0, "Wi‑Fi sử dụng sóng điện từ để truyền dữ liệu không dây."],
      ["Điều nào thể hiện việc ứng dụng Vật lí có trách nhiệm?", ["Cân nhắc tác động đến môi trường và con người", "Khai thác tài nguyên không giới hạn", "Bỏ qua mọi rủi ro", "Chỉ quan tâm đến tốc độ phát triển"], 0, "Ứng dụng khoa học cần cân nhắc tác động xã hội, môi trường và sự an toàn."],
      ["Máy hơi nước thường được xem là ứng dụng tiêu biểu của:", ["Nhiệt động lực học", "Cơ học lượng tử", "Quang học hiện đại", "Vật lí hạt nhân"], 0, "Máy hơi nước gắn với những kiến thức về nhiệt và sự chuyển hóa năng lượng."],
      ["Trong nghiên cứu khoa học, vai trò của giả thuyết là:", ["Đưa ra cách giải thích có thể kiểm tra", "Thay thế hoàn toàn bằng chứng", "Là kết luận không thể thay đổi", "Ngăn việc thực hiện thí nghiệm"], 0, "Giả thuyết là cách giải thích hoặc dự đoán tạm thời cần được kiểm tra bằng bằng chứng."]
    ],
    trueFalse: [
      { title: "Đối tượng và lịch sử Vật lí", statements: [
        ["Vật lí nghiên cứu vật chất và năng lượng.", true, "Đây là hai đối tượng nghiên cứu cơ bản của Vật lí."],
        ["Tiền Vật lí đã sử dụng phổ biến thí nghiệm kiểm soát như khoa học hiện đại.", false, "Giai đoạn này chủ yếu dựa vào quan sát và suy luận cảm tính."],
        ["Phương pháp thực nghiệm phát triển mạnh trong giai đoạn Vật lí cổ điển.", true, "Thực nghiệm là một đặc trưng quan trọng của Vật lí cổ điển."],
        ["Cơ học lượng tử là thành tựu của Vật lí hiện đại.", true, "Cơ học lượng tử nghiên cứu thế giới vi mô và thuộc Vật lí hiện đại."]
      ]},
      { title: "Vai trò và ứng dụng", statements: [
        ["Kiến thức Vật lí chỉ có ích trong môn Vật lí.", false, "Vật lí còn là nền tảng và hỗ trợ nhiều ngành khoa học tự nhiên."],
        ["Sóng điện từ được ứng dụng trong liên lạc không dây như Wi‑Fi.", true, "Wi‑Fi sử dụng sóng điện từ để truyền dữ liệu."],
        ["Ứng dụng công nghệ không cần xem xét tác động đến môi trường.", false, "Cần cân nhắc ô nhiễm, tài nguyên và các hệ quả đối với con người."],
        ["Máy tính và Internet có liên hệ với các thành tựu Vật lí hiện đại.", true, "Nhiều công nghệ hiện đại dựa trên điện tử, bán dẫn và sóng điện từ."]
      ]},
      { title: "Phương pháp nghiên cứu", statements: [
        ["Thí nghiệm có thể được dùng để kiểm chứng giả thuyết.", true, "Đây là bước quan trọng của phương pháp thực nghiệm."],
        ["Nếu kết quả khác dự đoán thì luôn phải bỏ kết quả đo.", false, "Cần xem xét dữ liệu, phép đo và giả thuyết một cách khách quan."],
        ["Mô hình có thể là vật chất thu nhỏ hoặc mô hình toán học.", true, "Có nhiều dạng mô hình khác nhau để mô phỏng và giải thích hiện tượng."],
        ["Phương pháp thực nghiệm và phương pháp mô hình có thể bổ trợ nhau.", true, "Mô hình có thể tạo dự đoán để kiểm tra bằng thực nghiệm."]
      ]}
    ],
    shortAnswer: [
      { question: "Bài học nêu bao nhiêu phương pháp nghiên cứu Vật lí chính?", acceptedAnswers: ["2"], expectedAnswer: "2", explanation: "Bài học giới thiệu hai phương pháp bổ trợ nhau: thực nghiệm và mô hình." },
      { question: "Lịch sử phát triển Vật lí được chia thành bao nhiêu giai đoạn?", acceptedAnswers: ["3"], expectedAnswer: "3", explanation: "Ba giai đoạn gồm tiền Vật lí, Vật lí cổ điển và Vật lí hiện đại." }
    ]
  },
  "lab-safety": {
    multipleChoice: [
      ["Khi chuẩn bị thí nghiệm điện, việc nào giúp hạn chế nguy cơ?", ["Kiểm tra dây dẫn và làm theo hướng dẫn", "Dùng dây bị hở", "Để nước cạnh mạch", "Cắm điện trước khi lắp mạch"], 0, "Cần kiểm tra dụng cụ, tránh dây hỏng và chỉ cấp điện khi đã lắp xong, được giáo viên cho phép."],
      ["Dụng cụ thủy tinh nên được đặt:", ["Chắc chắn, tránh mép bàn", "Sát mép bàn cho dễ lấy", "Trên dây điện", "Ở nơi mọi người dễ va phải"], 0, "Đặt dụng cụ thủy tinh vững và tránh mép bàn để giảm nguy cơ rơi vỡ."],
      ["Biển báo hình tam giác, nền vàng thường có ý nghĩa:", ["Cảnh báo nguy hiểm", "Bắt buộc thực hiện", "Lối thoát hiểm", "Nơi để đồ dùng cá nhân"], 0, "Biển tam giác nền vàng thường dùng để cảnh báo nguy hiểm."],
      ["Biển báo hình tròn nền xanh dương thường chỉ:", ["Hành động bắt buộc", "Điều cấm", "Cảnh báo nguy hiểm", "Vị trí lối thoát hiểm"], 0, "Biển tròn nền xanh thường yêu cầu thực hiện hành động như đeo kính bảo hộ."],
      ["Khi làm thí nghiệm có yêu cầu đeo kính bảo hộ, em nên:", ["Đeo kính theo hướng dẫn", "Chỉ đeo sau khi có sự cố", "Cho bạn mượn rồi làm tiếp", "Bỏ qua nếu thí nghiệm ngắn"], 0, "Dùng đồ bảo hộ theo yêu cầu của bài thực hành và hướng dẫn giáo viên."],
      ["Phát hiện dụng cụ thủy tinh đã nứt trước khi dùng, em nên:", ["Báo giáo viên và không tự ý dùng", "Dùng tiếp nếu cẩn thận", "Giấu vết nứt", "Đặt sát mép bàn"], 0, "Dụng cụ nứt có thể vỡ và gây thương tích; cần báo giáo viên để được hướng dẫn."],
      ["Trong khi thực hành, dây điện nên được:", ["Bố trí gọn gàng, không vướng lối đi", "Kéo căng ngang lối đi", "Đặt nơi dễ bị đạp lên", "Quấn quanh tay"], 0, "Bố trí dây gọn giúp tránh vướng víu và làm đổ thiết bị."],
      ["Biển tròn viền đỏ, nền trắng, có gạch chéo đỏ thường là biển:", ["Cấm", "Bắt buộc", "Chỉ dẫn lối thoát", "Khuyến khích"], 0, "Đây là dạng biển báo cấm, ví dụ cấm lửa hoặc cấm chạm tay."],
      ["Biển xanh lá hình vuông hoặc chữ nhật thường chỉ:", ["Lối thoát hiểm hoặc thiết bị cứu hộ", "Nguồn điện đang hoạt động", "Khu vực cấm", "Nơi có nhiệt độ cao"], 0, "Biển xanh lá thường chỉ dẫn lối thoát hiểm hoặc vị trí thiết bị cứu hộ."],
      ["Trước khi bắt đầu thí nghiệm, cần:", ["Đọc hướng dẫn và kiểm tra dụng cụ", "Tự ý cắm điện", "Chạy thử thiết bị hỏng", "Bỏ qua biển báo"], 0, "Đọc hướng dẫn và kiểm tra thiết bị giúp nhận biết nguy cơ trước khi thao tác."],
      ["Sau khi hoàn thành thí nghiệm điện, việc phù hợp trước khi tháo mạch là:", ["Tắt công tắc nguồn", "Kéo dây điện khi nguồn đang bật", "Đổ nước để làm mát", "Chạm vào các đầu nối"], 0, "Luôn tắt nguồn trước khi tháo mạch điện."],
      ["Khi xảy ra sự cố hoặc có người bị thương trong phòng thực hành, cần:", ["Báo ngay cho giáo viên", "Tự xử lí thiết bị bất kể nguy cơ", "Tiếp tục làm thí nghiệm", "Rời đi mà không báo"], 0, "Báo giáo viên ngay để người có trách nhiệm hướng dẫn xử lí an toàn."]
    ],
    trueFalse: [
      { title: "Thiết bị điện, nhiệt và quang học", statements: [
        ["Nên kiểm tra dây dẫn trước khi sử dụng.", true, "Kiểm tra giúp phát hiện dây hở hoặc sờn trước khi cấp điện."],
        ["Có thể tháo mạch điện khi nguồn vẫn đang bật nếu thao tác nhanh.", false, "Cần tắt nguồn trước khi tháo lắp mạch."],
        ["Không nên chạm tay trực tiếp vào vật đang nung nóng.", true, "Dùng dụng cụ phù hợp và làm theo hướng dẫn để tránh bỏng."],
        ["Có thể hướng tia laser vào mắt người khác nếu chỉ trong chốc lát.", false, "Không nhìn trực tiếp vào tia laser hoặc hướng tia về phía người."]
      ]},
      { title: "Quy trình thực hành", statements: [
        ["Cần đọc hướng dẫn và kiểm tra dụng cụ trước khi thực hành.", true, "Chuẩn bị giúp nhận biết yêu cầu và phát hiện thiết bị hỏng."],
        ["Chỉ tiến hành thí nghiệm khi được giáo viên cho phép.", true, "Làm theo hướng dẫn và sự cho phép của giáo viên."],
        ["Ăn uống và đùa nghịch trong phòng thực hành là an toàn nếu cẩn thận.", false, "Không ăn uống hoặc đùa nghịch; hành vi này có thể gây đổ vỡ và tai nạn."],
        ["Dây điện nên được bố trí gọn, không vướng lối đi.", true, "Dây gọn giúp tránh vấp và kéo đổ dụng cụ."]
      ]},
      { title: "Biển báo và xử lí sự cố", statements: [
        ["Biển tam giác nền vàng thường dùng để cảnh báo nguy hiểm.", true, "Đây là dạng biển cảnh báo phổ biến."],
        ["Biển tròn viền đỏ thường biểu thị việc bắt buộc phải làm.", false, "Biển tròn nền xanh thường chỉ hành động bắt buộc; viền đỏ thường chỉ điều cấm."],
        ["Biển xanh lá có thể chỉ lối thoát hiểm hoặc thiết bị cứu hộ.", true, "Biển xanh lá hình vuông hoặc chữ nhật thường là biển chỉ dẫn an toàn."],
        ["Khi thấy mùi khét hoặc tia lửa điện, cần báo ngay cho giáo viên.", true, "Dừng thao tác và báo giáo viên; không tự ý xử lí thiết bị."]
      ]}
    ],
    shortAnswer: [
      { question: "Sau khi thực hành, quy trình nêu bao nhiêu việc cần làm?", acceptedAnswers: ["3"], expectedAnswer: "3", explanation: "Sau khi thực hành, cần tắt nguồn, thu dọn dụng cụ và rửa tay." },
      { question: "Bài học nêu bao nhiêu nhóm biển báo an toàn?", acceptedAnswers: ["4"], expectedAnswer: "4", explanation: "Bài học nêu biển cảnh báo, biển cấm, biển bắt buộc và biển chỉ dẫn an toàn."}
    ]
  },
  "displacement-distance": {
    multipleChoiceOnly: true,
    illustrations: {
      figure1: `<figure class="quiz-illustration">
        <svg class="quiz-figure" viewBox="0 0 360 260" role="img" aria-label="Hình 1: A tại gốc tọa độ, đi ngang 3 mét đến B rồi đi lên 4 mét đến C; vectơ độ dịch chuyển nối A với C">
          <path d="M90 205V47M65 170H300M90 47l-5 10m5-10 5 10M300 170l-10-5m10 5-10 5" fill="none" stroke="#718096" stroke-width="1.5"/>
          <text x="304" y="174" fill="#CBD5E1" font-size="12">x (m)</text><text x="96" y="50" fill="#CBD5E1" font-size="12">y (m)</text>
          <path d="M90 170H150V90" fill="none" stroke="#FBBF24" stroke-width="3" stroke-dasharray="7 5"/>
          <path d="M124 166l9 4-9 4M146 111l4-9 4 9" fill="none" stroke="#FBBF24" stroke-width="2"/>
          <path d="M94 166L144 99" fill="none" stroke="#22D3EE" stroke-width="3"/>
          <path d="M138 102l9-8-2 12" fill="#22D3EE"/>
          <circle cx="90" cy="170" r="4" fill="#F8FAFC"/><circle cx="150" cy="170" r="4" fill="#F8FAFC"/><circle cx="150" cy="90" r="4" fill="#F8FAFC"/>
          <text x="43" y="190" fill="#F8FAFC" font-size="11">A (0; 0)</text><text x="133" y="192" fill="#F8FAFC" font-size="11">B (3; 0)</text><text x="157" y="86" fill="#F8FAFC" font-size="11">C (3; 4)</text>
          <text x="111" y="162" fill="#FBBF24" font-size="11">3 m</text><text x="157" y="133" fill="#FBBF24" font-size="11">4 m</text>
          <path d="M80 232h34" stroke="#FBBF24" stroke-width="3" stroke-dasharray="7 5"/><text x="121" y="236" fill="#CBD5E1" font-size="10">đường đi</text>
          <path d="M202 232h34" stroke="#22D3EE" stroke-width="3"/><path d="M231 228l8 4-8 4" fill="#22D3EE"/><text x="244" y="236" fill="#CBD5E1" font-size="10">độ dịch chuyển</text>
        </svg><figcaption>Hình 1 · AB = 3 m, BC = 4 m</figcaption>
      </figure>`,
      figure2: `<figure class="quiz-illustration">
        <svg class="quiz-figure" viewBox="0 0 360 260" role="img" aria-label="Hình 2: hành trình khép kín quanh hình chữ nhật dài 4 mét, rộng 3 mét; điểm đầu và cuối là A">
          <path d="M90 205V38M65 170H300M90 38l-5 10m5-10 5 10M300 170l-10-5m10 5-10 5" fill="none" stroke="#718096" stroke-width="1.5"/>
          <text x="304" y="174" fill="#CBD5E1" font-size="12">x (m)</text><text x="96" y="41" fill="#CBD5E1" font-size="12">y (m)</text>
          <path d="M90 170H250V50H90Z" fill="none" stroke="#FBBF24" stroke-width="3" stroke-dasharray="7 5"/>
          <path d="M153 166l9 4-9 4M246 112l4-9 4 9M182 54l-9-4 9-4M94 107l-4 9-4-9" fill="none" stroke="#FBBF24" stroke-width="2"/>
          <circle cx="90" cy="170" r="6" fill="#22D3EE"/><circle cx="250" cy="170" r="4" fill="#F8FAFC"/><circle cx="250" cy="50" r="4" fill="#F8FAFC"/><circle cx="90" cy="50" r="4" fill="#F8FAFC"/>
          <text x="51" y="191" fill="#F8FAFC" font-size="11">A (0; 0)</text><text x="253" y="190" fill="#F8FAFC" font-size="11">B (4; 0)</text>
          <text x="253" y="47" fill="#F8FAFC" font-size="11">C (4; 3)</text><text x="47" y="47" fill="#F8FAFC" font-size="11">D (0; 3)</text>
          <text x="160" y="190" fill="#FBBF24" font-size="11">4 m</text><text x="258" y="113" fill="#FBBF24" font-size="11">3 m</text>
          <text x="101" y="158" fill="#22D3EE" font-size="10">đầu = cuối</text>
          <path d="M80 232h34" stroke="#FBBF24" stroke-width="3" stroke-dasharray="7 5"/><text x="121" y="236" fill="#CBD5E1" font-size="10">đường đi một vòng</text>
        </svg><figcaption>Hình 2 · Chu vi hình chữ nhật 4 m × 3 m</figcaption>
      </figure>`,
      figure3: `<figure class="quiz-illustration">
        <svg class="quiz-figure" viewBox="0 0 360 260" role="img" aria-label="Hình 3: A tại gốc tọa độ, đi lên 6 mét đến B rồi sang phải 8 mét đến C; vectơ độ dịch chuyển nối A với C">
          <path d="M90 205V47M65 170H300M90 47l-5 10m5-10 5 10M300 170l-10-5m10 5-10 5" fill="none" stroke="#718096" stroke-width="1.5"/>
          <text x="304" y="174" fill="#CBD5E1" font-size="12">x (m)</text><text x="96" y="50" fill="#CBD5E1" font-size="12">y (m)</text>
          <path d="M90 170V90H196" fill="none" stroke="#FBBF24" stroke-width="3" stroke-dasharray="7 5"/>
          <path d="M86 120l4-9 4 9M168 86l9 4-9 4" fill="none" stroke="#FBBF24" stroke-width="2"/>
          <path d="M94 166L187 94" fill="none" stroke="#22D3EE" stroke-width="3"/>
          <path d="M181 94l11-6-4 12" fill="#22D3EE"/>
          <circle cx="90" cy="170" r="4" fill="#F8FAFC"/><circle cx="90" cy="90" r="4" fill="#F8FAFC"/><circle cx="196" cy="90" r="4" fill="#F8FAFC"/>
          <text x="43" y="190" fill="#F8FAFC" font-size="11">A (0; 0)</text><text x="43" y="86" fill="#F8FAFC" font-size="11">B (0; 6)</text><text x="199" y="86" fill="#F8FAFC" font-size="11">C (8; 6)</text>
          <text x="96" y="127" fill="#FBBF24" font-size="11">6 m</text><text x="137" y="84" fill="#FBBF24" font-size="11">8 m</text>
          <path d="M80 232h34" stroke="#FBBF24" stroke-width="3" stroke-dasharray="7 5"/><text x="121" y="236" fill="#CBD5E1" font-size="10">đường đi</text>
          <path d="M202 232h34" stroke="#22D3EE" stroke-width="3"/><path d="M231 228l8 4-8 4" fill="#22D3EE"/><text x="244" y="236" fill="#CBD5E1" font-size="10">độ dịch chuyển</text>
        </svg><figcaption>Hình 3 · AB = 6 m, BC = 8 m</figcaption>
      </figure>`,
      figure4: `<figure class="quiz-illustration">
        <svg class="quiz-figure" viewBox="0 0 360 240" role="img" aria-label="Hình 4: trên trục x, vật đi từ A ở 0 mét đến B ở 5 mét rồi quay về C ở 2 mét">
          <path d="M48 120H315M315 120l-10-5m10 5-10 5" fill="none" stroke="#718096" stroke-width="1.5"/>
          <text x="316" y="124" fill="#CBD5E1" font-size="12">x (m)</text>
          <path d="M65 120H265" fill="none" stroke="#FBBF24" stroke-width="3" stroke-dasharray="7 5"/>
          <path d="M205 116l9 4-9 4M158 116l-9 4 9 4" fill="none" stroke="#FBBF24" stroke-width="2"/>
          <path d="M65 120V167M145 120V167M65 167H145" fill="none" stroke="#22D3EE" stroke-width="3"/>
          <path d="M137 163l9 4-9 4" fill="#22D3EE"/>
          <circle cx="65" cy="120" r="5" fill="#F8FAFC"/><circle cx="265" cy="120" r="5" fill="#F8FAFC"/><circle cx="145" cy="120" r="5" fill="#F8FAFC"/>
          <path d="M65 114v12M145 114v12M265 114v12" stroke="#CBD5E1" stroke-width="1"/>
          <text x="51" y="103" fill="#F8FAFC" font-size="11">A (0 m)</text><text x="249" y="103" fill="#F8FAFC" font-size="11">B (5 m)</text><text x="129" y="103" fill="#F8FAFC" font-size="11">C (2 m)</text>
          <text x="92" y="183" fill="#22D3EE" font-size="11">vectơ AC = 2 m</text>
          <text x="102" y="65" fill="#FBBF24" font-size="10">A → B</text><text x="179" y="65" fill="#FBBF24" font-size="10">B → C</text>
          <path d="M80 218h34" stroke="#FBBF24" stroke-width="3" stroke-dasharray="7 5"/><text x="121" y="222" fill="#CBD5E1" font-size="10">đường đi, có đổi chiều</text>
          <path d="M239 218h34" stroke="#22D3EE" stroke-width="3"/><text x="280" y="222" fill="#CBD5E1" font-size="10">độ dịch chuyển</text>
        </svg><figcaption>Hình 4 · A = 0 m, B = 5 m, C = 2 m trên trục x</figcaption>
      </figure>`
    },
    multipleChoice: [
      ["Độ dịch chuyển là đại lượng cho biết điều gì?", ["Độ dài toàn bộ đường đi", "Sự thay đổi vị trí từ điểm đầu đến điểm cuối, kèm hướng", "Thời gian chuyển động", "Tốc độ của vật"], 1, "Độ dịch chuyển là vectơ nối vị trí đầu với vị trí cuối và có hướng.", 1],
      ["Độ dịch chuyển là đại lượng:", ["Vô hướng", "Vectơ", "Luôn dương", "Không xác định được chiều"], 1, "Độ dịch chuyển có cả độ lớn và hướng nên là đại lượng vectơ.", 4],
      ["Một vật đi thẳng theo một chiều, không quay đầu. Khi đó:", ["Quãng đường nhỏ hơn độ lớn độ dịch chuyển", "Quãng đường bằng độ lớn độ dịch chuyển", "Quãng đường bằng 0", "Độ dịch chuyển bằng 0"], 1, "Khi chuyển động thẳng một chiều, độ dài đường đi bằng độ lớn độ dịch chuyển.", 5],
      ["Để xác định vị trí của vật trên mặt phẳng, thông thường cần:", ["Một trục tọa độ", "Hệ tọa độ thích hợp", "Chỉ một đồng hồ", "Chỉ một thước đo thời gian"], 1, "Trên mặt phẳng cần hệ tọa độ phù hợp để xác định vị trí theo các phương.", 8],
      ["Một vật có thể được coi là chất điểm khi:", ["Kích thước vật bằng 0", "Kích thước của vật rất nhỏ so với phạm vi chuyển động đang xét", "Vật không có khối lượng", "Vật đứng yên"], 1, "Có thể coi vật là chất điểm khi kích thước của nó không đáng kể so với phạm vi chuyển động đang xét.", 10],
      ["Hệ quy chiếu thường bao gồm:", ["Hệ tọa độ và mốc thời gian", "Chỉ vật mốc", "Chỉ đồng hồ", "Chỉ quỹ đạo"], 0, "Hệ quy chiếu thường gồm hệ tọa độ gắn với vật mốc và mốc thời gian.", 13],
      ["Độ lớn độ dịch chuyển trong một hành trình luôn:", ["Lớn hơn hoặc bằng quãng đường", "Nhỏ hơn hoặc bằng quãng đường", "Bằng quãng đường", "Bằng 0"], 1, "Đoạn thẳng nối điểm đầu và điểm cuối không dài hơn đường đi thực tế.", 17],
      ["Phát biểu nào sau đây đúng?", ["Quãng đường phụ thuộc đường đi thực tế", "Độ dịch chuyển phụ thuộc mọi điểm trên đường đi", "Quãng đường có hướng", "Độ dịch chuyển luôn dương"], 0, "Quãng đường là tổng độ dài quỹ đạo vật đã đi, nên phụ thuộc đường đi thực tế.", 18],
      ["Khi vật chuyển động theo đường cong, độ dịch chuyển được biểu diễn bằng:", ["Độ dài đường cong", "Vectơ nối vị trí đầu với vị trí cuối", "Tổng độ dài các đoạn đường", "Chu vi quỹ đạo"], 1, "Độ dịch chuyển là vectơ nối vị trí đầu và vị trí cuối, không phải độ dài đường cong.", 19],
      ["Một bạn đi 120 m về phía Đông rồi 80 m về phía Đông. Quãng đường đi được là:", ["40 m", "80 m", "120 m", "200 m"], 3, "Quãng đường bằng tổng hai chặng cùng chiều: 120 + 80 = 200 m.", 21],
      ["Một người đi 300 m về phía Bắc rồi 100 m về phía Nam. Quãng đường là:", ["100 m", "200 m", "300 m", "400 m"], 3, "Quãng đường cộng cả hai chặng: 300 + 100 = 400 m.", 23],
      ["Một vật đi 6 m về Đông rồi 8 m về Bắc. Độ lớn độ dịch chuyển là:", ["2 m", "10 m", "14 m", "48 m"], 1, "Hai thành phần vuông góc nên độ dịch chuyển là √(6² + 8²) = 10 m.", 25],
      ["Một vật có vị trí đầu x₁ = −3 m và vị trí cuối x₂ = 7 m. Độ dịch chuyển là:", ["−10 m", "−4 m", "4 m", "10 m"], 3, "Δx = x₂ − x₁ = 7 − (−3) = 10 m.", 28],
      ["Vật đi từ x = 1 m đến x = 8 m, rồi quay về x = 5 m. Quãng đường là:", ["3 m", "7 m", "10 m", "13 m"], 2, "Quãng đường gồm 7 m đi ra và 3 m quay lại: 7 + 3 = 10 m.", 30],
      ["Một người đi 4 km về Bắc, 3 km về Đông, rồi 4 km về Nam. Độ lớn độ dịch chuyển là:", ["3 km", "4 km", "7 km", "11 km"], 0, "Hai chặng 4 km Bắc và 4 km Nam triệt tiêu; còn lại độ dịch chuyển 3 km về Đông.", 32],
      ["Một vật đi 10 m về phía Đông rồi 10 m về phía Tây. Quãng đường và độ dịch chuyển lần lượt là:", ["0 m; 20 m", "20 m; 0 m", "10 m; 10 m", "20 m; 20 m"], 1, "Quãng đường là 10 + 10 = 20 m; vật trở về điểm đầu nên độ dịch chuyển bằng 0.", 40],
      ["Một người đi từ A đến B 6 km, rồi B đến C 8 km vuông góc với AB. Độ lớn độ dịch chuyển AC là:", ["2 km", "10 km", "14 km", "48 km"], 1, "AC = √(6² + 8²) = 10 km theo định lí Pythagore.", 45],
      ["Quan sát Hình 1. Quãng đường đi từ A đến C theo đường A–B–C là:", ["3 m", "4 m", "7 m", "5 m"], 2, "Quãng đường theo A–B–C là AB + BC = 3 + 4 = 7 m.", 46, "figure1"],
      ["Quan sát Hình 1. Độ lớn độ dịch chuyển từ A đến C là:", ["3 m", "4 m", "5 m", "7 m"], 2, "Độ dịch chuyển AC là cạnh huyền của tam giác vuông có cạnh 3 m và 4 m: AC = 5 m.", 47, "figure1"],
      ["Quan sát Hình 2. Sau một vòng khép kín, quãng đường đi được là:", ["0 m", "10 m", "14 m", "12 m"], 2, "Một vòng hình chữ nhật dài 4 m, rộng 3 m có chu vi 2(4 + 3) = 14 m.", 49, "figure2"],
      ["Quan sát Hình 2. Sau khi đi hết một vòng, độ dịch chuyển là:", ["0 m", "10 m", "14 m", "24 m"], 0, "Sau một vòng khép kín, điểm đầu trùng điểm cuối nên độ dịch chuyển bằng 0 m.", 50, "figure2"],
      ["Quan sát Hình 3. Quãng đường đi theo A–B–C là:", ["6 m", "8 m", "10 m", "14 m"], 3, "Quãng đường theo A–B–C là AB + BC = 6 + 8 = 14 m.", 51, "figure3"],
      ["Quan sát Hình 3. Độ lớn độ dịch chuyển AC là:", ["2 m", "10 m", "12 m", "14 m"], 1, "AC = √(6² + 8²) = 10 m vì hai chặng vuông góc.", 52, "figure3"],
      ["Quan sát Hình 4. Quãng đường đi từ A đến B rồi về C là:", ["2 m", "3 m", "5 m", "8 m"], 3, "AB = 5 m và BC = 5 − 2 = 3 m; tổng quãng đường là 5 + 3 = 8 m.", 54, "figure4"],
      ["Quan sát Hình 4. Độ lớn độ dịch chuyển từ A đến C là:", ["2 m", "3 m", "5 m", "7 m"], 0, "A ở 0 m, C ở 2 m nên độ lớn độ dịch chuyển là |2 − 0| = 2 m.", 55, "figure4"],
      ["Một vật đi theo đường gấp khúc có hai cạnh vuông góc 9 m và 12 m. Độ lớn độ dịch chuyển là:", ["3 m", "15 m", "21 m", "108 m"], 1, "Độ dịch chuyển là √(9² + 12²) = 15 m.", 57],
      ["Nếu hai vectơ độ dịch chuyển vuông góc có độ lớn 5 m và 12 m thì độ lớn vectơ tổng hợp là:", ["7 m", "13 m", "17 m", "60 m"], 1, "Độ lớn vectơ tổng hợp là √(5² + 12²) = 13 m.", 58],
      ["Trong Hình 2, điểm đầu và điểm cuối trùng nhau nên:", ["Quãng đường bằng độ dịch chuyển", "Độ dịch chuyển bằng 0", "Quãng đường bằng 0", "Độ dịch chuyển bằng chu vi"], 1, "Hình 2 là hành trình khép kín nên điểm đầu và điểm cuối trùng nhau, độ dịch chuyển bằng 0.", 60, "figure2"],
      ["Một vật đi 8 m về Đông rồi 15 m về Bắc. Độ lớn độ dịch chuyển là:", ["7 m", "17 m", "23 m", "120 m"], 1, "Hai hướng vuông góc nên độ dịch chuyển là √(8² + 15²) = 17 m.", 97],
      ["Một người đi 3 km về Đông, 4 km về Bắc, rồi 3 km về Tây và 4 km về Nam. Quãng đường và độ dịch chuyển là:", ["14 km; 0 km", "10 km; 0 km", "14 km; 10 km", "0 km; 14 km"], 0, "Tổng quãng đường là 3 + 4 + 3 + 4 = 14 km; hành trình khép kín nên độ dịch chuyển bằng 0 km.", 100]
    ],
    trueFalse: [],
    shortAnswer: []
  },
  "measurement-errors": {
    multipleChoiceOnly: true,
    multipleChoice: [
      ["Phép đo trực tiếp là phép đo", ["Dùng công thức để suy ra đại lượng cần đo", "Đọc kết quả trực tiếp trên dụng cụ đo", "Chỉ thực hiện bằng đồng hồ", "Không cần dụng cụ đo"], 1, "Phép đo trực tiếp là đọc đại lượng cần đo trên dụng cụ.", 1],
      ["Phép đo gián tiếp là phép đo", ["Đọc trực tiếp trên thước", "Đọc trực tiếp trên cân", "Tính đại lượng qua công thức liên hệ với các đại lượng đo trực tiếp", "Không cần tính toán"], 2, "Phép đo gián tiếp dùng các đại lượng đo trực tiếp và công thức liên hệ.", 2],
      ["Kết quả của một phép đo luôn có sai số vì", ["Dụng cụ và thao tác đo không thể hoàn hảo tuyệt đối", "Mọi đại lượng đều thay đổi liên tục", "Người đo luôn đọc sai", "Đơn vị đo không chính xác"], 0, "Giới hạn của dụng cụ, phương pháp và thao tác khiến phép đo có sai số.", 3],
      ["Giá trị trung bình của đại lượng đo qua n lần đo được tính bằng", ["Tổng các lần đo nhân n", "Tổng các lần đo chia cho n", "Lần đo lớn nhất trừ lần nhỏ nhất", "Lần đo nhỏ nhất chia n"], 1, "Giá trị trung bình bằng tổng các lần đo chia số lần đo.", 4],
      ["Công thức tính giá trị trung bình của x₁, x₂, …, xₙ là", ["x̄ = x₁ + x₂ + … + xₙ", "x̄ = (x₁ + x₂ + … + xₙ)/n", "x̄ = n/(x₁ + … + xₙ)", "x̄ = x₁ − x₂"], 1, "Lấy tổng các giá trị đo chia cho số lần đo.", 5],
      ["Sai số tuyệt đối của một lần đo được xác định bằng", ["|xᵢ − x̄|", "xᵢ + x̄", "xᵢ/x̄", "x̄ − xᵢ trong mọi trường hợp"], 0, "Độ lệch tuyệt đối được tính bằng trị tuyệt đối của hiệu giữa lần đo và giá trị trung bình.", 6],
      ["Sai số tuyệt đối trung bình được tính bằng", ["Tổng các sai số tuyệt đối chia cho số lần đo", "Sai số lớn nhất nhân số lần đo", "Giá trị trung bình chia số lần đo", "Tổng các giá trị đo nhân số lần đo"], 0, "Cộng các độ lệch tuyệt đối rồi chia cho số lần đo.", 7],
      ["Sai số dụng cụ thường được xác định dựa vào", ["Khối lượng vật", "Độ chia nhỏ nhất và đặc điểm của dụng cụ", "Số lần đo", "Giá trị trung bình"], 1, "Độ phân giải và quy định của dụng cụ quyết định cách xác định sai số dụng cụ.", 8],
      ["Với dụng cụ có vạch chia rõ ràng, sai số dụng cụ trong phép đo thông thường thường lấy bằng", ["Một độ chia nhỏ nhất", "Nửa độ chia nhỏ nhất", "Hai lần độ chia nhỏ nhất", "Không có sai số"], 1, "Theo quy ước đo thông thường trong bài, sai số dụng cụ lấy bằng nửa độ chia nhỏ nhất.", 9],
      ["Độ chia nhỏ nhất (ĐCNN) của dụng cụ là", ["Giá trị lớn nhất ghi trên dụng cụ", "Khoảng cách giữa hai vạch liên tiếp bất kỳ", "Giá trị ứng với một vạch chia nhỏ nhất trên dụng cụ", "Sai số của phép đo"], 2, "ĐCNN là giá trị ứng với một vạch chia nhỏ nhất.", 10],
      ["Sai số tuyệt đối của phép đo thường được tính bằng", ["Sai số tuyệt đối trung bình cộng sai số dụng cụ", "Sai số trung bình trừ sai số dụng cụ", "Sai số dụng cụ chia sai số trung bình", "Giá trị trung bình cộng ĐCNN"], 0, "Sai số phép đo gồm sai số trung bình và sai số dụng cụ.", 11],
      ["Sai số tuyệt đối trung bình là 0,2 cm và sai số dụng cụ là 0,1 cm. Sai số phép đo là", ["0,1 cm", "0,2 cm", "0,3 cm", "0,02 cm"], 2, "ΔA = 0,2 + 0,1 = 0,3 cm.", 12],
      ["Sai số tỉ đối được tính theo công thức", ["δ = ΔA/Ā × 100%", "δ = Ā/ΔA × 100%", "δ = Ā + ΔA", "δ = Ā − ΔA"], 0, "Sai số tỉ đối bằng sai số tuyệt đối chia giá trị trung bình rồi nhân 100%.", 13],
      ["Sai số tỉ đối cho biết", ["Sai số tuyệt đối có đơn vị gì", "Mức độ sai lệch tương đối so với giá trị đo trung bình", "Số lần đo", "Giới hạn đo của dụng cụ"], 1, "Sai số tỉ đối thể hiện mức sai lệch so với giá trị trung bình.", 14],
      ["Khi ghi kết quả đo, cách viết phù hợp là", ["A = Ā ± ΔA", "A = Ā × ΔA", "A = Ā/ΔA", "A = ΔA − Ā"], 0, "Kết quả được ghi bằng giá trị trung bình kèm sai số tuyệt đối.", 15],
      ["Đơn vị của sai số tuyệt đối", ["Luôn là phần trăm", "Giống đơn vị của đại lượng được đo", "Luôn là mét", "Không có đơn vị"], 1, "Sai số tuyệt đối có cùng đơn vị với đại lượng đo.", 16],
      ["Sai số tỉ đối", ["Có cùng đơn vị với đại lượng đo", "Không có đơn vị và thường biểu diễn bằng phần trăm", "Luôn lớn hơn 100%", "Luôn bằng sai số dụng cụ"], 1, "Sai số tỉ đối là đại lượng không thứ nguyên.", 17],
      ["Để giảm ảnh hưởng của sai số ngẫu nhiên, nên", ["Chỉ đo một lần", "Đo nhiều lần trong điều kiện tương tự rồi lấy trung bình", "Chọn kết quả lớn nhất", "Bỏ qua các kết quả khác nhau"], 1, "Lặp phép đo và lấy trung bình giúp giảm ảnh hưởng ngẫu nhiên.", 18],
      ["Sai số ngẫu nhiên có thể xuất hiện do", ["Thao tác đo và các yếu tố môi trường biến đổi khó kiểm soát", "Chỉ do cách ghi đơn vị", "Luôn do dụng cụ bị hỏng", "Công thức tính sai"], 0, "Sai số ngẫu nhiên có thể do thao tác hoặc điều kiện môi trường thay đổi.", 19],
      ["Sai số hệ thống là sai số", ["Thay đổi ngẫu nhiên giữa các lần đo", "Có xu hướng làm kết quả lệch theo một hướng xác định", "Luôn bằng 0", "Chỉ xuất hiện khi đo thời gian"], 1, "Sai số hệ thống gây ra độ lệch có xu hướng nhất quán.", 20],
      ["Một nguyên nhân gây sai số hệ thống là", ["Đọc số liệu lúc nhanh lúc chậm", "Dụng cụ bị lệch điểm 0", "Dao động nhỏ không dự đoán được", "Nhiệt độ thay đổi ngẫu nhiên"], 1, "Dụng cụ lệch điểm 0 gây sai lệch cùng chiều cho các lần đo.", 21],
      ["Khi đọc thể tích chất lỏng trong ống chia độ, mắt cần đặt", ["Cao hơn mặt chất lỏng rất nhiều", "Thấp hơn mặt chất lỏng", "Ngang với đáy mặt khum lõm", "Ở vị trí bất kỳ"], 2, "Đặt mắt ngang đáy mặt khum để hạn chế sai số thị sai.", 22],
      ["Giới hạn đo (GHĐ) của dụng cụ là", ["Giá trị lớn nhất ghi trên dụng cụ mà dụng cụ đo được", "Giá trị nhỏ nhất giữa hai vạch", "Độ chia nhỏ nhất", "Sai số tuyệt đối"], 0, "GHĐ là giá trị lớn nhất dụng cụ có thể đo.", 23],
      ["Thước có ĐCNN 1 mm. ĐCNN đổi ra mét bằng", ["0,1 m", "0,01 m", "0,001 m", "0,0001 m"], 2, "1 mm = 0,001 m.", 24],
      ["Đo chiều dài 5 lần được 10,1; 10,2; 10,0; 10,1; 10,1 cm. Giá trị trung bình là", ["10,0 cm", "10,1 cm", "10,2 cm", "10,5 cm"], 1, "Tổng 5 số đo là 50,5 cm; chia 5 được 10,1 cm.", 25],
      ["Với dãy số đo trên, sai số tuyệt đối của lần đo 10,2 cm so với trung bình là", ["0,01 cm", "0,1 cm", "0,2 cm", "10,2 cm"], 1, "|10,2 − 10,1| = 0,1 cm.", 26],
      ["Các độ lệch tuyệt đối của dãy số đo trên có giá trị trung bình là", ["0,04 cm", "0,1 cm", "0,2 cm", "0,4 cm"], 0, "Các độ lệch là 0; 0,1; 0,1; 0; 0 cm; trung bình bằng 0,04 cm.", 27],
      ["Nếu ΔA = 0,2 cm và Ā = 10,0 cm thì sai số tỉ đối xấp xỉ", ["0,2%", "2%", "5%", "20%"], 1, "δ = 0,2/10,0 × 100% = 2%.", 28],
      ["Phép đo cho kết quả (2,50 ± 0,03) m. Khoảng giá trị tương ứng là", ["2,47 m đến 2,53 m", "2,50 m đến 2,53 m", "0,03 m đến 2,50 m", "2,53 m đến 2,56 m"], 0, "Lấy 2,50 m trừ và cộng sai số 0,03 m.", 29],
      ["Ā = 12,4 s và ΔA = 0,2 s. Cách ghi đúng là", ["(12,4 ± 0,2) s", "(12,4 ± 0,2) m", "12,4 × 0,2 s", "12,4/0,2 s"], 0, "Ghi giá trị trung bình cùng sai số và giữ đơn vị giây.", 30]
    ],
    trueFalse: [],
    shortAnswer: []
  },
  "speed-velocity": {
    multipleChoiceOnly: true,
    multipleChoice: [
      ["Một vật đi được quãng đường 150 m trong 10 s. Tốc độ trung bình là", ["20 m/s", "7,5 m/s", "18 m/s", "15 m/s"], 3, "v = 150/10 = 15 m/s.", 21],
      ["Một vật đi được 240 m trong 20 s. Tốc độ trung bình là", ["6 m/s", "14,4 m/s", "17 m/s", "12 m/s"], 3, "v = 240/20 = 12 m/s.", 22],
      ["Một vật đi được 600 m trong 30 s. Tốc độ trung bình là", ["10 m/s", "20 m/s", "24 m/s", "25 m/s"], 1, "v = 600/30 = 20 m/s.", 23],
      ["Một vật đi được 900 m trong 60 s. Tốc độ trung bình là", ["20 m/s", "18 m/s", "7,5 m/s", "15 m/s"], 3, "v = 900/60 = 15 m/s.", 24],
      ["Một vật đi được 1,2 m trong 0,2 s. Tốc độ trung bình là", ["7,2 m/s", "11 m/s", "6 m/s", "3 m/s"], 2, "v = 1,2/0,2 = 6 m/s.", 25],
      ["Một vật đi được 3600 m trong 120 s. Tốc độ trung bình là", ["35 m/s", "36 m/s", "30 m/s", "15 m/s"], 2, "v = 3600/120 = 30 m/s.", 26],
      ["Một vật đi được 500 m trong 25 s. Tốc độ trung bình là", ["20 m/s", "25 m/s", "10 m/s", "24 m/s"], 0, "v = 500/25 = 20 m/s.", 27],
      ["Một vật đi được 2,4 m trong 0,1 s. Tốc độ trung bình là", ["24 m/s", "12 m/s", "28,8 m/s", "29 m/s"], 0, "v = 2,4/0,1 = 24 m/s.", 28],
      ["Một vật đi được 750 m trong 50 s. Tốc độ trung bình là", ["20 m/s", "15 m/s", "18 m/s", "7,5 m/s"], 1, "v = 750/50 = 15 m/s.", 29],
      ["Một vật đi được 84 m trong 7 s. Tốc độ trung bình là", ["12 m/s", "14,4 m/s", "17 m/s", "6 m/s"], 0, "v = 84/7 = 12 m/s.", 30],
      ["Một vật đi được 18 m trong 0,5 s. Tốc độ trung bình là", ["18 m/s", "36 m/s", "41 m/s", "43,2 m/s"], 1, "v = 18/0,5 = 36 m/s.", 31],
      ["Một vật đi được 1500 m trong 100 s. Tốc độ trung bình là", ["15 m/s", "18 m/s", "7,5 m/s", "20 m/s"], 0, "v = 1500/100 = 15 m/s.", 32],
      ["Một vật đi được 12 m trong 0,4 s. Tốc độ trung bình là", ["36 m/s", "35 m/s", "15 m/s", "30 m/s"], 3, "v = 12/0,4 = 30 m/s.", 33],
      ["Một vật đi được 3,6 m trong 0,2 s. Tốc độ trung bình là", ["23 m/s", "9 m/s", "18 m/s", "21,6 m/s"], 2, "v = 3,6/0,2 = 18 m/s.", 34],
      ["Một vật đi được 420 m trong 35 s. Tốc độ trung bình là", ["12 m/s", "14,4 m/s", "17 m/s", "6 m/s"], 0, "v = 420/35 = 12 m/s.", 35],
      ["Một vật đi được 1000 m trong 40 s. Tốc độ trung bình là", ["25 m/s", "12,5 m/s", "28 m/s", "30 m/s"], 0, "v = 1000/40 = 25 m/s.", 36],
      ["Một vật đi được 54 m trong 1,5 s. Tốc độ trung bình là", ["18 m/s", "36 m/s", "43,2 m/s", "41 m/s"], 1, "v = 54/1,5 = 36 m/s.", 37],
      ["Một vật đi được 2 m trong 0,25 s. Tốc độ trung bình là", ["9,6 m/s", "8 m/s", "13 m/s", "4 m/s"], 1, "v = 2/0,25 = 8 m/s.", 38],
      ["Một vật đi được 270 m trong 15 s. Tốc độ trung bình là", ["9 m/s", "18 m/s", "23 m/s", "21,6 m/s"], 1, "v = 270/15 = 18 m/s.", 39],
      ["Một vật đi được 4,8 m trong 0,4 s. Tốc độ trung bình là", ["6 m/s", "14,4 m/s", "17 m/s", "12 m/s"], 3, "v = 4,8/0,4 = 12 m/s.", 40],
      ["Một người đi 80 m về phía Bắc trong 20 s. Vận tốc trung bình có độ lớn và hướng là", ["4 m/s về phía Bắc", "4 m/s về phía Nam", "0,25 m/s về phía Bắc", "16 m/s về phía Bắc"], 0, "Độ dịch chuyển 80 m về Bắc trong 20 s nên vận tốc là 4 m/s về Bắc.", 61],
      ["Xe đi theo chiều dương, độ dịch chuyển 300 m trong 15 s. Vận tốc trung bình là", ["20 m/s", "−20 m/s", "4,5 m/s", "0,05 m/s"], 0, "v = 300/15 = +20 m/s theo chiều dương.", 62],
      ["Vật có độ dịch chuyển −120 m trong 10 s. Vận tốc trung bình là", ["12 m/s", "−12 m/s", "−1200 m/s", "0,083 m/s"], 1, "v = −120/10 = −12 m/s.", 63],
      ["Người đi 40 m về Đông rồi 10 m về Tây trong 10 s. Độ lớn vận tốc trung bình là", ["5 m/s", "3 m/s", "4 m/s", "1 m/s"], 1, "Độ dịch chuyển là 30 m; độ lớn vận tốc trung bình bằng 30/10 = 3 m/s.", 64],
      ["Xe đi 100 m về Đông rồi 100 m về Tây trong 40 s. Tốc độ trung bình là", ["0 m/s", "2,5 m/s", "5 m/s", "10 m/s"], 2, "Tổng quãng đường là 200 m; tốc độ trung bình bằng 200/40 = 5 m/s.", 65],
      ["Người đi hết vòng sân tròn dài 400 m trong 100 s. Tốc độ trung bình là", ["0 m/s", "4 m/s", "100 m/s", "400 m/s"], 1, "Tốc độ trung bình bằng quãng đường 400 m chia 100 s, bằng 4 m/s.", 66],
      ["Với hành trình đi hết một vòng sân rồi về điểm đầu, vận tốc trung bình là", ["4 m/s", "−4 m/s", "0 m/s", "400 m/s"], 2, "Độ dịch chuyển bằng 0 vì vị trí đầu và cuối trùng nhau.", 67],
      ["Vật chuyển động thẳng theo chiều âm với tốc độ 8 m/s. Vận tốc của vật là", ["8 m/s", "−8 m/s", "0 m/s", "−16 m/s"], 1, "Chiều chuyển động âm nên vận tốc có dấu âm.", 68],
      ["Xe có vận tốc +12 m/s. Sau 5 s, độ dịch chuyển của xe là", ["+60 m", "−60 m", "+2,4 m", "+17 m"], 0, "Độ dịch chuyển Δx = vΔt = 12 × 5 = +60 m.", 69],
      ["Vật có vận tốc −3 m/s trong 8 s. Độ dịch chuyển là", ["24 m", "−24 m", "−11 m", "3 m"], 1, "Δx = vΔt = −3 × 8 = −24 m.", 70]
    ],
    trueFalse: [],
    shortAnswer: []
  },
  "measuring-speed": {
    multipleChoiceOnly: true,
    multipleChoice: [
      ["Mục đích chính của thí nghiệm trong Bài 6 là gì?", ["Đo khối lượng của vật chuyển động", "Đo tốc độ của vật chuyển động", "Đo lực tác dụng lên vật", "Đo nhiệt độ của vật"], 1, "Thí nghiệm nhằm xác định tốc độ của vật chuyển động.", 1],
      ["Đại lượng cần xác định trong thí nghiệm Bài 6 là", ["Quãng đường", "Thời gian", "Tốc độ", "Gia tốc"], 2, "Đại lượng cần tìm là tốc độ; quãng đường và thời gian được đo để tính.", 2],
      ["Công thức tính tốc độ trung bình khi vật đi quãng đường s trong thời gian t là", ["v = t/s", "v = s/t", "v = s·t", "v = t − s"], 1, "Tốc độ trung bình bằng quãng đường chia thời gian.", 3],
      ["Đơn vị SI của tốc độ là", ["km/h", "m/s", "m", "s"], 1, "Trong hệ SI, tốc độ có đơn vị mét trên giây.", 4],
      ["Để đo khoảng thời gian vật chuyển động qua một đoạn đường, có thể sử dụng", ["Thước đo chiều dài", "Cân điện tử", "Đồng hồ bấm giây", "Nhiệt kế"], 2, "Đồng hồ bấm giây dùng để đo khoảng thời gian.", 5],
      ["Dụng cụ dùng để xác định chiều dài quãng đường vật đi được là", ["Thước đo", "Lực kế", "Ampe kế", "Nhiệt kế"], 0, "Dùng thước đo chiều dài đoạn đường.", 6],
      ["Khi đo tốc độ, cần đo trực tiếp những đại lượng nào?", ["Khối lượng và lực", "Quãng đường và thời gian", "Gia tốc và khối lượng", "Lực và thời gian"], 1, "Tốc độ được tính từ quãng đường và thời gian.", 7],
      ["Nếu đo quãng đường bằng mét và thời gian bằng giây thì tốc độ có đơn vị", ["m/s", "s/m", "m·s", "km/s"], 0, "Đơn vị tốc độ là đơn vị quãng đường chia đơn vị thời gian, tức m/s.", 8],
      ["Để kết quả đo đáng tin cậy hơn, nên", ["Chỉ đo một lần", "Đo lặp lại nhiều lần rồi lấy giá trị trung bình phù hợp", "Ước lượng bằng mắt", "Làm tròn mọi số đo về 0"], 1, "Đo lặp lại và lấy trung bình giúp giảm ảnh hưởng của sai số ngẫu nhiên.", 9],
      ["Khi dùng đồng hồ bấm giây bằng tay, sai số có thể xuất hiện do", ["Phản xạ của người bấm đồng hồ", "Màu sắc của vật", "Khối lượng của thước", "Nhiệt độ phòng luôn bằng 0"], 0, "Thời gian phản ứng khi bấm nút gây sai số đo thời gian.", 10],
      ["Một vật đi được 2 m trong 4 s. Tốc độ trung bình là", ["0,25 m/s", "0,5 m/s", "2 m/s", "8 m/s"], 1, "v = 2/4 = 0,5 m/s.", 11],
      ["Xe đồ chơi đi được 3 m trong 1,5 s. Tốc độ trung bình là", ["1 m/s", "2 m/s", "3 m/s", "4,5 m/s"], 1, "v = 3/1,5 = 2 m/s.", 12],
      ["Vật chuyển động với tốc độ 0,8 m/s trong 5 s. Quãng đường là", ["0,16 m", "4 m", "5,8 m", "6,25 m"], 1, "s = vt = 0,8 × 5 = 4 m.", 13],
      ["Vật đi được 12 m với tốc độ trung bình 3 m/s. Thời gian chuyển động là", ["3 s", "4 s", "9 s", "36 s"], 1, "t = s/v = 12/3 = 4 s.", 14],
      ["Đổi 36 km/h ra m/s được", ["5 m/s", "10 m/s", "18 m/s", "36 m/s"], 1, "36 km/h chia 3,6 bằng 10 m/s.", 15],
      ["Đổi 5 m/s ra km/h được", ["5 km/h", "10 km/h", "18 km/h", "25 km/h"], 2, "5 m/s nhân 3,6 bằng 18 km/h.", 16],
      ["Trong phép đo tốc độ, tốc độ được tính từ", ["Tích quãng đường và thời gian", "Thương quãng đường cho thời gian", "Tổng quãng đường và thời gian", "Hiệu quãng đường và thời gian"], 1, "Công thức v = s/t là thương của quãng đường cho thời gian.", 17],
      ["Giữ nguyên quãng đường, thời gian tăng gấp đôi thì tốc độ trung bình", ["Tăng gấp đôi", "Giảm một nửa", "Không đổi", "Tăng gấp bốn"], 1, "Vì v = s/t, tăng thời gian gấp đôi làm tốc độ còn một nửa.", 18],
      ["Giữ nguyên thời gian, quãng đường tăng gấp đôi thì tốc độ trung bình", ["Giảm một nửa", "Không đổi", "Tăng gấp đôi", "Tăng gấp bốn"], 2, "Với thời gian không đổi, tốc độ tỉ lệ thuận với quãng đường.", 19],
      ["Khi vật đứng yên trong khoảng thời gian xét, tốc độ của vật bằng", ["0", "1 m/s", "9,8 m/s", "Không xác định trong mọi trường hợp"], 0, "Vật đứng yên không đi được quãng đường nên tốc độ bằng 0.", 20],
      ["Nên chọn đoạn đường đo đủ dài để", ["Vật có thời gian chuyển động đủ lớn, giảm ảnh hưởng tương đối của sai số bấm giờ", "Vật luôn đứng yên", "Không cần đo thời gian", "Làm tốc độ tự tăng lên"], 0, "Thời gian đo dài hơn làm sai số phản ứng có ảnh hưởng tương đối nhỏ hơn.", 21],
      ["Khi xác định thời điểm bắt đầu và kết thúc chuyển động, cần thống nhất", ["Màu sắc của vật", "Vị trí mốc bắt đầu và mốc kết thúc", "Khối lượng người đo", "Nhiệt độ của đồng hồ"], 1, "Mốc đo thống nhất giúp xác định đúng quãng đường và khoảng thời gian tương ứng.", 22],
      ["Đo được quãng đường 1,20 m và thời gian 2,0 s. Tốc độ trung bình là", ["0,40 m/s", "0,60 m/s", "1,20 m/s", "2,40 m/s"], 1, "v = 1,20/2,0 = 0,60 m/s.", 23],
      ["Vật đi 6 m trong 3 s, sau đó đi 4 m trong 2 s. Tốc độ trung bình toàn hành trình là", ["1 m/s", "2 m/s", "3 m/s", "5 m/s"], 1, "Tổng quãng đường 10 m, tổng thời gian 5 s; tốc độ là 2 m/s.", 24],
      ["Vật đi được 10 m trong 4 s. Tốc độ trung bình là", ["2 m/s", "2,5 m/s", "4 m/s", "40 m/s"], 1, "v = 10/4 = 2,5 m/s.", 25],
      ["Ba lần đo thời gian là 2,0 s; 2,2 s; 1,8 s. Thời gian trung bình là", ["1,8 s", "2,0 s", "2,2 s", "6,0 s"], 1, "Giá trị trung bình (2,0 + 2,2 + 1,8)/3 = 2,0 s.", 26],
      ["Ba lần đo quãng đường được 1,00 m; 1,02 m; 0,98 m. Giá trị trung bình là", ["0,98 m", "1,00 m", "1,02 m", "3,00 m"], 1, "Giá trị trung bình (1,00 + 1,02 + 0,98)/3 = 1,00 m.", 27],
      ["Khi ghi kết quả đo, cần ghi", ["Chỉ số đo, không cần đơn vị", "Giá trị kèm đơn vị", "Đơn vị nhưng không cần giá trị", "Một con số bất kì"], 1, "Số đo cần đi kèm đơn vị để thể hiện đại lượng và quy mô.", 28],
      ["Số liệu chính xác đến hai chữ số thập phân, tốc độ tính được 1,23456 m/s. Cách ghi hợp lí là", ["1,23456 m/s", "1,23 m/s", "123,456 m/s", "0,01 m/s"], 1, "Làm tròn kết quả phù hợp độ chính xác của số liệu đo.", 29],
      ["Để hạn chế sai số ngẫu nhiên khi đo thời gian, nên", ["Lặp lại phép đo nhiều lần trong điều kiện tương tự", "Thay đổi dụng cụ sau mỗi lần đo", "Chỉ chọn lần đo lớn nhất", "Không ghi lại số liệu"], 0, "Đo lặp lại trong điều kiện tương tự giúp đánh giá và giảm ảnh hưởng sai số ngẫu nhiên.", 30]
    ],
    trueFalse: [],
    shortAnswer: []
  }
};
