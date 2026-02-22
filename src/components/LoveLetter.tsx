"use client";
import { useState, useEffect } from "react";
import { Dancing_Script, Montserrat } from "next/font/google";
import {
  Mail,
  Sparkles,
  X,
  Heart,
  Camera,
  Coffee,
  Plane,
  Star,
  BookOpen,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const dancing = Dancing_Script({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });

// Dữ liệu 7 lá thư
const topicsData = [
  {
    id: "t1",
    title: "Ngày đầu mình gặp nhau",
    icon: Mail,
    color: "bg-rose-100 text-rose-600 border-rose-200",
    content: `Ngày anh viết lá thư này cũng có lẽ là một trong những ngày em bận rộn nhất với những sự chuẩn bị của mình. Cảm ơn em suốt hơn 200 ngày qua đã đến bên và lại cho anh thêm 1 lần nữa hiểu được cảm giác được yêu.\n\nEm có nhớ hôm đầu em gặp anh không, cái hôm mà mình đi Nam Cát Tiên í, với anh Phúc chị Tiên. Anh nhớ lúc đó anh không hề có ấn tượng tốt với em. Anh đã nghĩ em là 1 người sẽ rất là ham vui, thích đi trêu ghẹo mấy đứa nhỏ vì anh đã nghe bảo là em đang quen 1 đứa 2k8. Anh còn nghĩ rằng em sẽ là 1 đứa siêu chảnh và còn chẳng thèm quan tâm tới anh. Anh nghĩ em có chú ý tới anh nhưng vì quá chảnh nên em còn chẳng thèm nói chuyện với anh. Tới mãi lúc đi ăn sáng thì anh vẫn nghĩ em chẳng thích anh chút nào. Vì phong thái em tỏa ra khá lành chảnh. Nhma Nam Cát Tiên rồi thì anh mới nhận ra là em dễ gần hơn những gì anh nghĩ. Anh với em nói chuyện với nhau nhiều hơn và cảm thấy thân với nhau hơn. Nhưng mà lúc đi ăn trưa em lại đá cho anh 1 cái thật đau, em lại bảo rằng “ hong biết cua gái thì đừng có cua, coi chừng thành trò cười của nó”. Éc éc lúc đó anh lại thấy em chảnh lại. chiều 2 đứa đi tới vô rừng. Anh cũng chụp cho em nhiều ảnh hơn, cũng nói chuyện nhiều hơn. Nhma anh biêt em đang có người yêu nên cũng hong có muốn nói chuyện nhiều. Anh chỉ biết là em là 1 đứa có gu thẩm mỹ về màu sắc ạ. cái tới tối tụi mình đi ăn chung với nhau, ún bia nè. Lúc này em khác hẳn ấy chứ, em có vẻ vui cười nói chuyện nhiều hơn. Lúc này cách anh nhìn em cũng đã khác nhiều so với hồi sáng. Sang ngày hôm sau anh thấy em khác với những gì anh nghĩ về 1 cô gái bình thường. Em có vẻ khá lười vận động và thích ngủ. Gần trưa em mới dậy, xong lúc đi về anh còn thấy em hậu đậu vì quên đồ tận 3 4 lần. Tới tối hôm đó về tới nơi thì anh gửi hình để chọc em vì có tấn dìm em heheheh! Xong từ đó 2 đứa nt 1 hồi thì thấy em cũng thú vị với dễ gần, nhưng mà bị cái là nhiều khi chán rồi thì lại hỏng rep =.=.`,
  },
  {
    id: "t2",
    title: "Bắt đầu để ý",
    icon: Coffee,
    color: "bg-orange-100 text-orange-600 border-orange-200",
    content: `Anh nhớ mãi ngày hôm đó í 2/6. Tự dưng hôm đó anh biết em chia tay rùi nên cũng có thể thoải mái nói chuyện với em hơn. Vì trước đó anh cứ sợ bị cm đấm cho không trượt phát nào… Cũng chả hiểu lúc đó sao mình nhắn tin với nhau nhiều vãi í. Anh nhớ là mình nhắn tin với nhau từ lúc đâu đó khoảng 6h chiều tới hơn 12h. Xong anh mới bảo là anh mỏi mắt rùi hay là mình call cho dễ nói chuyện. Ờ thì lúc đó em cũng chấp nhận, tự dưng anh thấy đèn xanh, uầy vui vãi luôn ấy. Nói chuyện 1 hồi cái tự nhiên anh bị dính em luôn. Ngày hôm sau anh bắt đầu kiếm chuyện để nói với em, anh nhớ là anh còn thiếu em kèo trà sữa, nên cũng đánh liều kêu trả kèo cho em, lại còn hỏi em có ăn gì không anh cũng chuẩn bị đi ăn để anh mua cho nữa chứ=))) tự dưng thấy mình cũng khéo vl hehehe. Cuối cùng thì cũng gặp được em rồi đưa đồ cho em, anh còn mua 1 bịch khăn giấy ướt để em ăn đỡ bị dơ nựa. Xong chiều hôm đó anh đi về rủ bạn đi bida thì anh ngồi thẫn thờ vì mãi mà em hỏng rep anh hehe. Sang ngày hôm sau anh lại lấy cớ là nhờ em chỉ bài để có thể bắt chuyện với em, ai ngờ đùng cái em rủ ra cà phê luôn. Xanh lè xanh lẹt khoái ơi là khoái. Hôm đó 2 đứa học thì ít mà tám thì nhiều, ngồi từ 5h tới gần 2h sáng mới về hehehe. Ngày hôm đó thì anh cũng có nói thíc em >.<. May mà em đồng ý cho anh tiếp cận. Từ hôm anh với em ngày nào cũng nhắn tin. Tới thứ 6 tuần hôm đó thì em mượn máy ảnh của anh để đi quay cái gì đó mà bị bùm kèo, cái anh chạy qua đó chơi với em. Đi chụp hình đi ăn đồ. Tới mãi khuya mới về. Hôm đó anh về bị mẹ mắng. Em còn cho anh cái đèn xanh to đùng nữa. Em bảo cẩn thận kẻo mốt không được qua quận 10 gặp người đẹp nữa đó. Khoái muốn chết. Những ngày sau anh với em cứ 1 tuần sẽ gặp nhau 4 5 bữa. Anh cũng dần dần cảm nhận được là em có thả nhiều đèn xanh cho anh. Từ đó anh với em ngày càng thân thiết với nhau hơn. Đi chơi với nhau nhiều hơn. Và có thể gần là của nhau hơn.`,
  },
  {
    id: "t3",
    title: "Cảm xúc thuở ban đầu",
    icon: Camera,
    color: "bg-amber-100 text-amber-600 border-amber-200",
    content: `Em có biết là yêu em là trải nghiệm rất đáng giá và cũng rất mới mẻ với anh hem. Anh không biết sao chứ thật sự quen em là lần đầu anh quen một người đã có quan điểm cá nhân về rất nhiều việc trong chuyện tình cảm. Anh cảm thấy nguồn năng lượng rất mạnh mẽ của em về các vấn đề chung của 2 đứa trong xuyên suốt thời gian yêu nhau. Thời gian đầu yêu nhau là thời điểm anh cảm nhận rõ nhất điều đó. Ví dụ như em luôn luôn đề cao sự chậm rãi để cảm nhận từng “ Gia vị” của tình yêu. Thật sự là sau khi tỏ tình em xong anh cảm thấy rất bất ngờ vì em không giống với những người trước anh từng quen. Kể cả là hôn má thì mãi mãi sau này khi quen đc 1 thời gian ngắn rồi em mới cho. Còn hôn môi thì ối dồi ôi lâu luôn. Có lẽ là vì lúc đó anh với em quan điểm khác nhau, anh thì chỉ nghĩ là hôn môi bình thường, còn em thì lại nghĩ là thêm 1 số “topping”. Nhưng anh nghĩ là đó cũng là một trải nghiệm tuyệt vời của anh, anh có thêm góc nhìn khác về chuyện tình cảm, về cách một người “enjoy” một câu chuyện tình cảm. Từ đó anh có thể tìm được cách để có thể chăm sóc và chiều chuộng em nhiều hơn. Ngoài ra quan điểm về chuyện giải quyết vấn đề của hai đứa, em luôn muốn giải quyết vấn đề một cách nhanh nhất và không được để qua đêm. Anh nghĩ nó hay đó ạ, nhưng mà chắc không có phù hợp với anh hẹ hẹ!!! tại vì tối anh siêu cấp buồn ngủ, anh chả còn tỉnh táo để nói chuyện với em. Anh vẫn luôn mong muốn là 2 đứa có thể giải quyết với nhau khi nào mà anh tỉnh táo nhất. Những mà có lẽ là thiếu sót của anh khi anh chưa từng nói điều này với em. Vì vậy khi em đọc được những dòng này thì hãy biết rằng đây là những gì anh anh mong muốn được nói với em ạ. Còn nói về những kỉ niệm của khoảng thời gian đầu yêu nhau, thì diễn tả đúng phải là “ham chơi”. Thật sự quãng thời gian đầu yêu nhau tụi mình luôn cố gắng để gặp nhau, đi chơi nhiều nhất có thể. Thời gian anh luôn muốn dành cho em, vì đi với em anh thấy vui. Lúc đó anh chẳng có suy nghĩ gì cả, chỉ là anh muốn gặp em thui. Thời gian đầu trôi qua quá là êm đềm, bọn mình cũng ít khi cãi nhau, cũng ít khi bất đồng quan điểm. Một phần là sau những mốt tình trước, anh đã rút ra được những bài học quý giá. Anh sẽ luôn giữ mình trong trạng thái bình tĩnh, vì anh biết khi anh không kiểm soát được bản thân mình, anh sẽ có khả năng đánh mất em.Ngoài ra thì hồi đó tụi mình cũng đi hay đi chụp photobooth nè, hồi đó anh với em siêng đi chụp photobooth vãi ò í, dịp nào cũng đi, rảnh là đi, thích là đi. Anh với em còn hay tặng quà cho nhau mỗi dịp kỉ niệm 1 tháng, 2 tháng, 100 ngày,.... Anh thấy rất là hạnh phúc khi trong khoảng thời gian màu hồng này, có thể là vì đã từ rất lâu rồi anh mới có cảm giác được yêu như vậy. Và khoảng thời gian anh thấy vui nhất của giai đoạn này chính là lúc mà 2 đứa chạy sự kiện O-Month. Khoảng thời gian đó 2 đứa có nhiều thời gian bên cạnh nhau, nói chuyện với nhau nhiều hơn, có nhiều bạn chung. Được làm việc chung với nhau. Lúc này 2 đứa cứ phải gọi là bên nhau cả ngày. `,
  },
  {
    id: "t4",
    title: "Thấu hiểu nhau",
    icon: Heart,
    color: "bg-sky-100 text-sky-600 border-sky-200",
    content: `Anh tính mốc này từ khi mình chuẩn bị đi Vũng Tàu, vì anh cảm nhận được lúc đó em đã bắt đầu làm quen và đặt sự tin tưởng của em đối với anh. Qua chừng ấy thời gian mình yêu nhau thì cả hai đều có những đánh giá về con người đối phương, biết hơn về tính cách cũng như cách sống của người kia. 2 đứa quyết định đi Vũng Tàu với nhau nè. Dù chuyến đi này có hơi gian nan vì vứ tới lúc đi là lại có lịch bận gì đó, buồn ơi là buồn luôn. Anh cũng buồn cũng khó chịu em ạ. Nhưng mà cuối cùng thì cũng có thể đi chơi với nhau, dù là nó trễ hơn so với dự tính tới 1 tháng. Chuyến đi đầu tiên này của 2 đứa cũng thật sự là quá đáng nhớ ấy ạ, tại vì mình có thời gian ở cùng nhau, hiểu nhau hơn, nói chuyện với nhau nhiều hơn, có đánh giá sâu hơn về đối phương. Chuyến đi đó không còn chỉ là chuyến đi chơi nữa mà nó là một chuyến đi nghỉ dưỡng của 2 đứa. Chuyến đi đó anh vẫn còn lụy tới bây giờ. Qua chuyến đi đó em cũng đánh giá là anh đàng hoàng hơn em nghĩ. Dù là chung chăn chung giường nhưng anh thật sự liêm và không làm gì em cả, dù là 2 đứa cũng có thân mật với nhau. Chỉ là vì anh bảo em không cho thì anh sẽ không làm gì. Ngoài ra thì em cũng cảm thấy việc nói chuyện với anh vui hơn những gì em nghĩ vì anh nói chuyện có suy nghĩ về vấn đề, tư duy logic. Anh đã từng nghĩ anh với em chẳng giống nhau chỗ nào và 2 đứa có vẻ lạc quẻ. Nhưng sau chuyến đi đó thì 2 đứa nhận ra là những khách biệt của 2 đứa đã bù trừ cho nhau và 2 đứa hợp nhau hơn là những gì đã từng nghĩ. Cũng từ chuyến đi này thì 2 đứa đã thấu hiểu nhau nhiều hơn, tích cực nói chuyện với nhau hơn, quan tâm tới cảm xúc của đối phương hơn. Qua đó cũng bước vào giai đoạn gắn bó với nhau lâu dài hơn. Trong khoảng thời gian này 2 đứa cũng có bước tiến mới khi anh dẫn em về gặp gỡ ba mẹ anh. Anh cũng không biết tại sao, nhưng thật sự lần này anh rất nghiêm túc với em, và anh cũng muốn công khai em ở khắp mọi nơi. Và có vẻ như là ba mẹ anh cũng muốn hỗ trợ cho 2 đứa. Khi mà em hết hợp đồng nhà, thì anh cũng có xin ba mẹ anh cho em qua bên nhà anh ở tạm vài hôm và được ba mẹ anh cho phép. Anh cảm giác như được ba mẹ ủng hộ vậy, vui lắm ạ. Sau này thì em cũng gặp gỡ ba mẹ anh nhiều hơn, cũng từ đó anh thấy được sự ủng hộ của ba mẹ. Lúc anh viết đoạn này thì lúc trưa ba mẹ anh nói với anh là sợ anh ở đây có con khác=)) hehehe!`,
  },
  {
    id: "t5",
    title: "Khoảng thời gian khó khăn",
    icon: Plane,
    color: "bg-teal-100 text-teal-600 border-teal-200",
    content: `Từ ngày 1/1/2026 cũng là giai đoạn mà ngày xa em đang đến gần. Khoảng thời gian này thì em cũng chuyển xuống nhà anh ở rùi, nên là hầu như là ngày nào mình cũng gặp nhau. Anh cũng cảm nhận được ngày xa em không còn xa nữa, nên muốn dành nhiều thời gian nhất có thể để bên em. Dù là thời gian không quá lâu nhưng cũng đã để lại cho anh nhiều kỉ niệm, ngay ngày đầu năm mới thì anh với em đã lên kế hoạch đi Vũng Tàu ngay giữa đêm hehehe. Với anh thì anh thấy vui vãi. Từ ngày em chuyển xuống đây thì hầu như là ngày nào anh cũng qua đón em đi học, anh không đi học cũng đi qua đón em. Dù là mẹ mắng cũng khá nhiều, nhưng mà anh đã hứa với mẹ khi mà em đi về Quy Nhơn thì anh sẽ không đi ra ngoài nựa. Rùi cũng tới gần ngày em đi về quê, tuy là có 1 tháng thui, nhưng mà lúc em ở bên trọ anh lại có rất nhiều kỉ niệm với anh ạ. Từng ngày qua phụ em dọn đồ để em về quê với anh thật sự rất là nhiều cảm xúc ạ. Từ vui vì em sắp được thực hiện ước mơ của em, buồn vì sắp phải yêu xa, bồi hồi vì những khoảng khắc đời thường lúc yêu nhau. Khoảng thời gian đó với anh thật sự rất đáng nhớ. Ngày mà anh đưa em ra bến xe thật sự là anh rất buồn ạ. Nhưng đâu đó anh vẫn hi vọng rằng sắp tới anh sẽ có 1 chuyến đi Quy Nhơn thật đáng nhớ ạ. Hơn 1 tuần sau khi tiễn em ở bến xe, thì cuối cùng cũng tới ngày đi Quy nhơn, thời gian với anh trôi qua thật nhanh. Ngồi trên xe 12 tiếng đồng hồ thật sự là quá nhanh. Trong lòng cứ mong ngóng tới lúc xuống xe để được gặp em. Thật sự là anh rất nhớ em đó ạ. Đặt chân xuống Quy Nhơn rồi, thật sự không khí quá dễ chịu ấy, cảnh đẹp lứm. suốt khoảng thời gian 5 ngày ở đó, anh đã thật sự quên đi tất cả những muộn phiền, thời gian đó anh thật sự rất trân trọng đó ạ. Được về quê của em, được em dẫn đi gặp ba mẹ, được em dẫn đi ăn. Thời gian đó thật đáng nhớ làm seo. Được đón sinh nhật cùng em tại nơi em sinh ra, được đèo em đi khắp Quy Nhơn, được biết về những ký ức lúc nhỏ của em, anh thật sự rất vui ạ. Anh thật sự cảm thấy vô cùng thoải mái. Nhưng rồi cuộc vui nào cũng đến lúc tàn, ngày anh phải xa em lại một lần nữa tới. Kết thúc 5 ngày ở Quy Nhơn, kết thúc một hành trình đẹp cùng người con gái anh thương, anh phải về lại Sài Gòn. Trước lúc anh về, 2 đứa đã nằm nói chuyện với nhau, dù không được nhiều nhưng anh đã cảm nhận được rất nhiều những cảm xúc của em. 2 đứa khóc, khóc vì sắp rời xa nhau, khóc vì cuộc vui còn dang dở, khóc vì 2 đứa còn tương lai của mình. Ngày em tiễn anh ở bến xe, anh thật sự đã khóc rất nhiều, em cũng đã khóc rất nhiều. 2 đứa thật sự rất yêu nhau. Và hành trình sắp tới sẽ là thử thách cho 2 đứa. Những anh chưa bao giờ ngừng mơ về tương lai sau này 2 đứa vẫn còn có thể bên nhau.`,
  },
  {
    id: "t6",
    title: "Cô giáo bé nhỏ của anh",
    icon: BookOpen,
    color: "bg-purple-100 text-purple-600 border-purple-200",
    content: `Xuyên suốt quá trình yêu nhau, anh đã học được rất nhiều thứ từ em. Trước hết là những hành động nhỏ và ngày thường. Giống như là lau bát đũa cho em nè, lấy nước nè, lau dao kéo trước khi cắt nè, ăn không ngậm muỗng nè,...anh hỏng biết sao chớ anh thấy em kĩ mấy cái đó vãi hehe. Ngoài ra, còn là cách giải quyết vấn đề nè, hỏng nổi nóng cọc cằn nè, hong để vấn đề qua đêm. Đó giờ anh chưa bao giờ làm như thế cạ. Hùi đó anh cọc lên là anh chửi ghia lắm í. Nhưng kể từ khi quen em anh cọc thì có cọc bực thì có bực nhưng chưa bao giờ nặng lời với em í. Anh lúc nào cũng cố gắng để nhẹ nhàng nâng niêu nhường nhịn em hết. Anh còn biết thêm là anh chẳng bao giờ có thể cãi lại em… chẳng hiểu sao mỗi khi cãi nhau với em anh chẳng bao giờ thắng được em cạ. Anh còn học được việc mỗi khi cãi nhau mà em khóc là phải dịu lại để dỗ em. Vì em là em bé hay khóc dễ tổn thương và luôn luôn cần anh dỗ dành. Trước giờ vẫn là anh luôn mặc kệ ngta khóc vì anh đang quá là bực mình rùi, và anh cũng chưa bao giờ được đối xử như vậy ạ. Éc éc, anh còn học được quan tâm chăm sóc em mỗi khi HS xg nựa. Và còn nhiều thứ nựa nhưng anh không thể kể hết được. Anh cảm thấy em thật sự chỉ anh rất là nhiều thứ í, nhiều thứ anh chưa bao giờ được biết, và cũng chưa bao giờ được đối xử dịu dành nhẹ nhàng như v.`,
  },
  {
    id: "t7",
    title: "Ước muốn nhỏ nhoi",
    icon: Star,
    color: "bg-indigo-100 text-indigo-600 border-indigo-200",
    content: `Dù là em thật sự rất là tốt nhưng mà đôi lúc anh vẫn cảm thấy hong hài lòng với em ạ. Thứ nhất, luôn luôn là vấn đề anh nhắc mãi với em, đó chính là sức khỏe. Anh mong là em sẽ có trách nhiệm với sức khỏe của mình hơn. Tại sao á hả? vì lỡ em bị gì ai cưới anh?? ai làm mẹ của con anh? ai đi du lịch với anhhhhhhhh??? Đã ngủ muộn lại còn hay uống trà sữa, ăn vặt. Em còn như thế nữa là anh méc mẹ em đấy, bực hết cả mình. Rồi còn cái trò nhịn ăn, hoặc uống trà sữa ăn bánh tráng trộn/mì thay cơm nha. Anh biết em làm cái trò đó nữa là anh đụp em tại chỗ đó. Thứ 2 anh muốn em quan tâm tới anh nhiều hơn, thật sự là mấy ngày nay anh rất là buồn vì em ít rep anh í. Đã thế em lại còn seen hong rep nữa, anh đợi em mà trong lòng anh rất là buồn í. Nè ví dụ như là hôm tối mùng 4 nha, anh biết em rất là bận, dọn dẹp sắp xếp đồ đạc và em cũng có bạn bè đang đợi anh nữa. Nhưng mà đâu phải có mỗi bạn bè của em đợi em đâu, anh cũng đang đợi em mà, anh cũng biết em bận nên nhiều khi anh hong rep và anh cũng cố gắng lâu lâu nhắn 1 vài câu hỏi thăm xem em như thế nào. Em thì lại chả rep anh, nhiều khi anh đợi cả nửa ngày, mà nếu như anh nhìn thấy em đăng locket với bạn nhiều lúc anh cũng tuổi thân chứ, anh cứ nghĩ rằng là mình hong có quan trọng với em nên là anh buồn lắm ạ. Hoặc là có những việc đơn giản như là anh hỏi em địa chỉ khách sạn để anh biết chọn chỗ thuận tiện cho nhà em đi, nhưng mỗi ngày anh hỏi 1 lần em đầu im ru hong có nói năng câu nào với anh, anh cũng tổn thương ạ, cảm giác anh vì em cũng ráng nương theo em rùi mà anh không nhận lại được phản hồi ấy, thật sự là anh buồn lắm ạ. Hoặc như là sáng mùng 5 em lên xe đi Sài Gòn, em có rủ bạn bè tới đưa tiễn em, em up mng lên locket. Còn anh thì em chẳng nhắn cho anh 1 câu nào, anh lúc nào đi đâu hoặc làm gì cũng sẽ nhắn em 1 vài câu cho em yên tâm ạ. Lúc anh ngủ dậy anh thấy tủi thân lắm ạ. A vẫn nghĩ là không biết mình có đủ quan trọng để em để tâm tới anh hay không. Này là 2 cái lớn nhất mà anh muốn em thay đổi ạ. Còn những thứ khác anh sẽ từ từ nói với em sau ạ.`,
  },
];

// Toạ độ 7 lá thư - responsive cho mobile/tablet/desktop
// Mobile: vị trí gần nhau hơn, scale nhỏ hơn
// Desktop: vị trí xa hơn, scale lớn hơn
// Mobile: thu nhỏ lại để vừa màn hình
const getLetterPositions = (isMobile: boolean, isTablet: boolean) => {
  if (isMobile) {
    return [
      // --- VÒNG NGOÀI (mobile) - thu nhỏ hơn ---
      { x: -58, y: -100, rotate: -18 },
      { x: -20, y: -125, rotate: -5 },
      { x: 20, y: -125, rotate: 5 },
      { x: 58, y: -100, rotate: 18 },
      // --- VÒNG TRONG (mobile) ---
      { x: -40, y: -40, rotate: -8 },
      { x: 0, y: -58, rotate: 0 },
      { x: 40, y: -40, rotate: 8 },
    ];
  }
  if (isTablet) {
    return [
      // --- VÒNG NGOÀI (tablet) ---
      { x: -100, y: -140, rotate: -20 },
      { x: -35, y: -175, rotate: -6 },
      { x: 35, y: -175, rotate: 6 },
      { x: 100, y: -140, rotate: 20 },
      // --- VÒNG TRONG (tablet) ---
      { x: -65, y: -55, rotate: -10 },
      { x: 0, y: -78, rotate: 0 },
      { x: 65, y: -55, rotate: 10 },
    ];
  }
  // Desktop
  return [
    // --- VÒNG NGOÀI ---
    { x: -160, y: -190, rotate: -24 },
    { x: -55, y: -240, rotate: -8 },
    { x: 55, y: -240, rotate: 8 },
    { x: 160, y: -190, rotate: 24 },
    // --- VÒNG TRONG ---
    { x: -100, y: -80, rotate: -12 },
    { x: 0, y: -110, rotate: 0 },
    { x: 100, y: -80, rotate: 12 },
  ];
};

const ACCENT_COLORS: Record<
  string,
  { bg: string; text: string; border: string; icon: string }
> = {
  "bg-rose-100 text-rose-600 border-rose-200": {
    bg: "#ffe4e6",
    text: "#e11d48",
    border: "#fecdd3",
    icon: "#fb7185",
  },
  "bg-orange-100 text-orange-600 border-orange-200": {
    bg: "#ffedd5",
    text: "#ea580c",
    border: "#fed7aa",
    icon: "#fb923c",
  },
  "bg-amber-100 text-amber-600 border-amber-200": {
    bg: "#fef3c7",
    text: "#d97706",
    border: "#fde68a",
    icon: "#fbbf24",
  },
  "bg-sky-100 text-sky-600 border-sky-200": {
    bg: "#e0f2fe",
    text: "#0284c7",
    border: "#bae6fd",
    icon: "#38bdf8",
  },
  "bg-teal-100 text-teal-600 border-teal-200": {
    bg: "#ccfbf1",
    text: "#0d9488",
    border: "#99f6e4",
    icon: "#2dd4bf",
  },
  "bg-purple-100 text-purple-600 border-purple-200": {
    bg: "#f3e8ff",
    text: "#9333ea",
    border: "#e9d5ff",
    icon: "#c084fc",
  },
  "bg-indigo-100 text-indigo-600 border-indigo-200": {
    bg: "#e0e7ff",
    text: "#4f46e5",
    border: "#c7d2fe",
    icon: "#818cf8",
  },
};

export default function LoveLetterGrid() {
  const [phase, setPhase] = useState<
    "idle" | "envelope-open" | "letters-out" | "reading"
  >("idle");
  const [selectedTopic, setSelectedTopic] = useState<
    (typeof topicsData)[0] | null
  >(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  // Detect screen size for responsive letter positions
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 640);
      setIsTablet(window.innerWidth >= 640 && window.innerWidth < 1024);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    if (phase !== "idle") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [phase]);

  // Khi click vào phong bì đang ở góc
  const handleEnvelopeClick = () => {
    if (phase !== "idle") return;
    setPhase("envelope-open"); // Bắt đầu di chuyển ra giữa và mở nắp
    setTimeout(() => setPhase("letters-out"), 800); // Đợi 800ms cho ra tới giữa rồi mới xòe thư
  };

  // Đóng toàn bộ, thu thư lại và cất về góc
  const handleClose = () => {
    setSelectedTopic(null);
    setPhase("envelope-open"); // Rút thư vào lại phong bì
    setTimeout(() => {
      setPhase("idle"); // Đóng nắp và bay về góc
    }, 400); // Đợi 400ms cho thư vào hết rồi mới bay
  };

  const handleSelectTopic = (topic: (typeof topicsData)[0]) => {
    setSelectedTopic(topic);
    setPhase("reading");
  };

  const handleBackToLetters = () => {
    setSelectedTopic(null);
    setPhase("letters-out");
  };

  const isEnvelopeOpen = phase !== "idle";
  const isLettersOut = phase === "letters-out" || phase === "reading";

  return (
    <>
      {/* Overlay Background */}
      <AnimatePresence>
        {phase !== "idle" && (
          <motion.div
            key="overlay"
            className="fixed inset-0 z-[80] bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={phase === "letters-out" ? handleClose : undefined}
          />
        )}
      </AnimatePresence>

      {/* Greeting text above envelope */}
      <AnimatePresence>
        {phase === "letters-out" && (
          <motion.div
            key="greeting"
            className="fixed inset-0 z-[91] flex flex-col items-center pointer-events-none"
            initial={{ opacity: 0, y: -10 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { delay: 0.5, duration: 0.5 },
            }}
            exit={{ opacity: 0, y: -10, transition: { duration: 0.2 } }}
            style={{ paddingTop: "15vh" }} // Đặt cứng chữ ở khoảng 15% phía trên để tránh đè thư
          >
            <p
              className={`${dancing.className} text-white text-3xl md:text-5xl drop-shadow-lg`}
            >
              Gửi em bé Quỳnh Như 🤍
            </p>
            <p
              className={`${montserrat.className} text-white/70 text-sm md:text-base mt-2`}
            >
              Chọn một lá thư để đọc nhé
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Close button */}
      <AnimatePresence>
        {phase === "letters-out" && (
          <motion.button
            key="close-btn"
            className="fixed top-6 right-6 md:top-10 md:right-10 z-[110] p-3 bg-white/10 hover:bg-rose-500 text-white rounded-full transition-colors backdrop-blur-sm border border-white/20"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1, transition: { delay: 0.6 } }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={handleClose}
          >
            <X size={24} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* ENVELOPE + MINI LETTERS */}
      {/* WRAPPER DI CHUYỂN: Ở góc dưới trái (khi idle) và ra giữa màn hình (khi open) */}
      <div
        className={`fixed z-[90] flex items-center justify-center transition-all duration-700 ease-in-out pointer-events-none ${
          isEnvelopeOpen ?
            "bottom-[18%] sm:bottom-[15%] md:bottom-[20%] left-1/2 -translate-x-1/2" // Nằm giữa, thấp xuống một chút
          : "bottom-3 left-3 sm:bottom-4 sm:left-4 md:bottom-5 md:left-5 translate-x-0" // Neo ở góc dưới trái
        }`}
      >
        <motion.div
          onClick={handleEnvelopeClick}
          animate={
            isEnvelopeOpen ?
              {
                scale:
                  isMobile ? 1.6
                  : isTablet ? 1.8
                  : 2.2,
                rotate: 0,
              } // Scale nhỏ hơn trên mobile
            : { scale: 1, y: [0, -6, 0], rotate: -6 } // Bobbing nhẹ khi ở góc
          }
          transition={
            isEnvelopeOpen ?
              { duration: 0.7, ease: "easeInOut" }
            : { y: { duration: 2.5, repeat: Infinity, ease: "easeInOut" } }
          }
          whileHover={phase === "idle" ? { scale: 1.1, rotate: -6 } : {}}
          // Thu nhỏ kích thước gốc
          className="relative w-[56px] h-[38px] sm:w-[64px] sm:h-[44px] md:w-[84px] md:h-[58px] cursor-pointer drop-shadow-2xl pointer-events-auto"
          style={{ perspective: 1000 }}
        >
          <div className="absolute inset-0 bg-rose-200 rounded-lg shadow-md" />

          {/* Lá thư lấp ló */}
          <motion.div
            animate={{
              y: isEnvelopeOpen ? -28 : 0, // Thu ngắn khoảng cách rút thư cho hợp với size nhỏ
              opacity: isEnvelopeOpen ? 1 : 0.6,
            }}
            transition={{
              duration: 0.5,
              delay: isEnvelopeOpen ? 0.4 : 0,
              type: "spring",
            }}
            className="absolute bottom-0 left-1.5 right-1.5 h-8 md:h-10 bg-white rounded-t-md z-10 flex justify-center items-start pt-1.5 shadow-sm border-t-2 border-rose-100"
          >
            <Heart className="text-rose-400 w-3.5 h-3.5 md:w-4 md:h-4 animate-pulse" />
          </motion.div>

          <div
            className="absolute inset-0 bg-rose-300 rounded-lg z-20 pointer-events-none shadow-inner"
            style={{
              clipPath: "polygon(0 0, 50% 55%, 100% 0, 100% 100%, 0 100%)",
            }}
          />

          {/* Nắp phong bì */}
          <motion.div
            animate={{
              rotateX: isEnvelopeOpen ? 180 : 0,
              zIndex: isEnvelopeOpen ? 5 : 30,
            }}
            transition={{ duration: 0.5, delay: isEnvelopeOpen ? 0.4 : 0 }}
            style={{
              transformOrigin: "top",
              clipPath: "polygon(0 0, 100% 0, 50% 55%)",
            }}
            className="absolute top-0 left-0 w-full h-full bg-rose-400 rounded-lg drop-shadow-sm"
          />

          {/* Tem trái tim */}
          <motion.div
            animate={{
              opacity: isEnvelopeOpen ? 0 : 1,
              scale: isEnvelopeOpen ? 0 : 1,
            }}
            transition={{ duration: 0.25, delay: isEnvelopeOpen ? 0.4 : 0 }}
            // Thu nhỏ con tem lại cho cân xứng
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 w-8 h-8 md:w-10 md:h-10 bg-rose-500 rounded-full flex items-center justify-center shadow-lg border-[2px] border-white/60"
          >
            <Heart className="w-4 h-4 text-white fill-white" />
          </motion.div>
        </motion.div>

        {/* Cụm chứa thư nằm ngay chính giữa phong bì */}
        <div className="absolute top-1/2 left-1/2 w-0 h-0">
          <AnimatePresence>
            {topicsData.map((topic, i) => {
              const letterPositions = getLetterPositions(isMobile, isTablet);
              const pos = letterPositions[i];
              const accent = ACCENT_COLORS[topic.color] ?? {
                bg: "#fff",
                text: "#333",
                border: "#eee",
                icon: "#aaa",
              };
              const Icon = topic.icon;
              const isSelected = selectedTopic?.id === topic.id;
              const isDimmed = phase === "reading" && !isSelected;

              if (!isLettersOut) return null;

              return (
                <motion.button
                  key={topic.id}
                  className="absolute pointer-events-auto rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl flex flex-col items-center justify-center gap-1 sm:gap-1.5 cursor-pointer border sm:border-2"
                  style={{
                    width:
                      isMobile ? 52
                      : isTablet ? 70
                      : 90,
                    height:
                      isMobile ? 66
                      : isTablet ? 88
                      : 110,
                    marginLeft:
                      isMobile ? -26
                      : isTablet ? -35
                      : -45,
                    marginTop:
                      isMobile ? -33
                      : isTablet ? -44
                      : -55,
                    backgroundColor: accent.bg,
                    borderColor: accent.border,
                  }}
                  initial={{ x: 0, y: 0, scale: 0.1, opacity: 0, rotate: 0 }}
                  animate={
                    isSelected ?
                      {
                        x: 0,
                        y: 0,
                        scale: 1.5,
                        opacity: 0,
                        rotate: 0,
                        transition: { duration: 0.4, ease: "easeInOut" },
                      }
                    : isDimmed ?
                      {
                        x: pos.x,
                        y: pos.y,
                        scale: 0.85,
                        opacity: 0.25,
                        rotate: pos.rotate,
                        filter: "blur(2px)",
                        transition: { duration: 0.35 },
                      }
                    : {
                        x: pos.x,
                        y: pos.y,
                        scale: 1,
                        opacity: 1,
                        rotate: pos.rotate,
                        filter: "blur(0px)",
                        transition: {
                          type: "spring",
                          stiffness: 80,
                          damping: 14,
                          delay: 0.08 * i,
                        },
                      }

                  }
                  exit={{
                    x: 0,
                    y: 0,
                    scale: 0,
                    opacity: 0,
                    transition: { duration: 0.35, delay: 0.04 * i },
                  }}
                  whileHover={
                    phase === "letters-out" ?
                      {
                        scale: 1.15,
                        y: pos.y - 12,
                        rotate: 0,
                        zIndex: 10,
                        transition: { duration: 0.2 },
                      }
                    : {}
                  }
                  whileTap={phase === "letters-out" ? { scale: 0.96 } : {}}
                  onClick={() =>
                    phase === "letters-out" && handleSelectTopic(topic)
                  }
                >
                  <div
                    className="rounded-full p-1 sm:p-1.5 md:p-2.5 flex items-center justify-center"
                    style={{ backgroundColor: `${accent.icon}22` }}
                  >
                    <Icon
                      size={
                        isMobile ? 14
                        : isTablet ?
                          18
                        : 24
                      }
                      strokeWidth={1.8}
                      style={{ color: accent.text }}
                    />
                  </div>
                  <span
                    className={`${montserrat.className} font-semibold text-[6px] sm:text-[8px] md:text-[10px] leading-tight text-center px-1 sm:px-1.5`}
                    style={{ color: accent.text }}
                  >
                    {topic.title}
                  </span>
                </motion.button>
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      {/* BẢNG ĐỌC THƯ CHI TIẾT */}
      <AnimatePresence>
        {phase === "reading" && selectedTopic && (
          <motion.div
            key="reading-panel"
            className="fixed inset-0 z-[105] flex items-center justify-center p-4 sm:p-8 pointer-events-none"
          >
            <div
              className="absolute inset-0 pointer-events-auto"
              onClick={handleBackToLetters}
            />

            <motion.div
              className="relative pointer-events-auto w-full max-w-3xl rounded-[2rem] shadow-2xl overflow-hidden flex flex-col"
              style={{
                backgroundColor:
                  ACCENT_COLORS[selectedTopic.color]?.bg ?? "#fff",
                borderColor:
                  ACCENT_COLORS[selectedTopic.color]?.border ?? "#eee",
                border: "2px solid",
                maxHeight: "85vh",
              }}
              initial={{ scale: 0.8, opacity: 0, y: 30 }}
              animate={{
                scale: 1,
                opacity: 1,
                y: 0,
                transition: {
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                  delay: 0.1,
                },
              }}
              exit={{
                scale: 0.9,
                opacity: 0,
                y: 30,
                transition: { duration: 0.3, ease: "easeIn" },
              }}
            >
              {/* Header */}
              <div
                className="flex items-center gap-3 px-6 md:px-8 py-5 md:py-6 shrink-0 border-b"
                style={{
                  borderColor: ACCENT_COLORS[selectedTopic.color]?.border,
                }}
              >
                <button
                  onClick={handleBackToLetters}
                  className="p-2 rounded-full transition-colors hover:bg-black/10"
                  style={{ color: ACCENT_COLORS[selectedTopic.color]?.text }}
                >
                  <X size={24} />
                </button>
                <div
                  className="p-3 rounded-full"
                  style={{
                    backgroundColor: `${ACCENT_COLORS[selectedTopic.color]?.icon}33`,
                  }}
                >
                  <selectedTopic.icon
                    size={24}
                    style={{ color: ACCENT_COLORS[selectedTopic.color]?.text }}
                    strokeWidth={1.8}
                  />
                </div>
                <h3
                  className={`${dancing.className} text-3xl md:text-5xl flex-1`}
                  style={{ color: ACCENT_COLORS[selectedTopic.color]?.text }}
                >
                  {selectedTopic.title}
                </h3>
                <Sparkles
                  size={20}
                  style={{ color: ACCENT_COLORS[selectedTopic.color]?.icon }}
                  className="opacity-60 shrink-0 hidden md:block"
                />
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto custom-scrollbar">
                <div className="px-6 md:px-10 py-6 md:py-8">
                  <p
                    className={`${montserrat.className} text-sm md:text-base leading-relaxed md:leading-loose whitespace-pre-wrap text-justify`}
                    style={{
                      color: `${ACCENT_COLORS[selectedTopic.color]?.text}dd`,
                    }}
                  >
                    {selectedTopic.content}
                  </p>
                </div>
              </div>

              {/* Footer */}
              <div
                className="shrink-0 flex justify-center py-5 border-t"
                style={{
                  borderColor: ACCENT_COLORS[selectedTopic.color]?.border,
                }}
              >
                <Heart
                  size={20}
                  style={{ color: ACCENT_COLORS[selectedTopic.color]?.icon }}
                  className="fill-current opacity-50"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
