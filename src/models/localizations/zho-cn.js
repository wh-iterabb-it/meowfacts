const facts = [
  "在1987年的美国，猫首次取代狗成为最多人饲养的宠物。",
  "一起生活的猫有时候会互相摸摸对方的头以表示没有想要打架的意思；特别是在小猫很兴奋的时候会经常发生。",
  "猫妈妈会教小猫如何使用猫砂盘。",
  "猫咪从小时候受到的对待会影响他日后性格特征的发展。",
  "与普遍看法相反，猫其实是一种社交动物。宠物猫懂得回应对话，而且很享受与人类的友谊。",
  "家猫的平均寿命约 14 岁。若照顾妥当，猫其实可以活到 20 岁以上。",
  "替猫咪绝育可以延长他们 2 到 3 年寿命。",
  "猫也会罹癌，尤其是老龄猫；虽然如此，但及时就医很多时候能完全根治。",
  "猫咪无法品尝到甜味。",
  "猫的身体无法自行产生脂肪，所以必需从饮食中摄取。",
  "某些常见的室内盆栽对猫有害。包括：常春藤、鸢尾花、槲寄生、藤蔓、红豆杉等…",
  "普拿疼（扑热息痛）与巧克力对猫而言都是很危险的毒品。",
  "很多猫都无法很好地消化牛奶制品，并引致他们腹泻。",
  "猫平均每餐的份量大约等于 5 只老鼠。",
  "猫有机会通过误食跳蚤惹上绦虫。除非以药物去除，否则这些寄生虫将会在猫体内存活一辈子。这些绦虫通过剥离它们长长身体的最后一节来繁殖。剥离后的一节身体会爬出猫的肛门然后留下数以百计的虫卵，然后这些虫卵会被跳蚤的幼虫摄食，并周而复始。人类也会因误食受感染的跳蚤而惹上这类绦虫。若猫已有绦虫寄宿，必须尽快求医为其驱虫。",
  "猫有机会通过进食老鼠惹上绦虫。若你的猫咪捕获老鼠，最好的做法是把奖品拿走。",
  "有一种艾滋病会影响猫咪。",
  "暹罗猫的「面色」会根据身体部分的体温差异而改变；例如体温低的部分会呈现比较深色。",
  "暹罗猫在刚出生时都是全身白色的，这是因为在母猫的体内温度较高。",
  "对猫咪过敏的人实际上是对猫的口水与皮屑过敏。如果猫咪有经常洗澡，就可减轻过敏症状。",
  "研究指出对猫咪过敏的原因有可能与它们的气味腺体有关。猫在脸部和尾巴根部都有气味腺体，而公猫会产生非常强烈的气味。如果过敏原确实是这类气味，那么对猫过敏的人可能更容忍已绝育的母猫。",
  "猫咪并不觉得它们是很细小的动物；相反，它们认为我们只是一种比较大的猫。这种想法在多方面影响它们的行为。",
  "猫也会蛀牙与患上牙龈疾病，所以每年都需要带它们见兽医与清洁牙齿。",
  "很多人担心在猫身上感染寄生虫，如原虫和弓形虫等。尽管这些寄生虫确实会导致人体生病，但最严重的问题是它们可能导致婴儿先天缺陷。弓形虫是一种常见的寄生虫，它们有时通过猫的排泄物传播。感染通常是因为食用生牛肉引起的。孕妇和免疫力较弱的人应避免接触猫砂盆，除此之外没有其他原因需要避免接触猫咪。",
  "所有家猫的祖先－非洲野猫仍然存在于世上。",
  "在古埃及，杀害猫咪是一种可招致死亡的重罪。",
  "在古埃及会把猫咪制成木乃伊，而且还会在墓里面放置经防腐处理的老鼠。在一个古城曾发现超过 300,000 具猫咪木乃伊。",
  "在中世纪的圣约翰节期间，教徒会围捕黑猫并将他们带到城镇广场上活活烧死。",
  "首个猫咪展览于 1871 年英国伦敦的水晶宫举行。",
  "目前有约 100 个不同的家猫品种。",
  "猫咪的归家技能与雀鸟类似，都是以生物时钟、太阳角度与地球磁场来校准。如果猫咪被带到远处也能够自行回家。但若主人搬家，猫咪确实无法找到他们。",
  "猫会埋藏自己的排泄物以避免天敌追踪。",
  "猫每天睡约 16 到 18 小时。猫在睡觉时仍会警戒着感官刺激；若你在它们睡觉时戳尾巴，它们也会作出反应。",
  "除了以鼻子闻，猫咪也能够从上颚与鼻腔之间的犁鼻器（亦称作Jacobson's organ）感知嗅觉。",
  "自来水的氯气会刺激猫咪的嗅觉，建议应先静水 24 小时后才饲给它们。",
  "第 16 任美国总统亚伯拉罕·林肯热爱猫咪，在他居住白宫时曾养了 4 只猫咪。",
  "凯撒大帝、亨利二世、卡尔十一世以及拿破仑都害怕猫咪。",
  "猫咪平均有 24 条猫须，在脸上两侧横向排列成 4 行。",
  "「猫」在不同的语言：法语: chat；德语: katze；意大利语: gatto；西班牙语/葡萄牙语: gato；依地语: kats；马耳他语: qattus；瑞典语/挪威语: katt；荷兰语: kat；冰岛语: kottur；希腊语: catta；印地语: katas；日语: neko；波兰语: kot；乌克兰语: kotuk；夏威夷语: popoki；俄罗斯语: koshka；拉丁语: cattus；埃及语: mau；土耳其语: kedi；亚美尼亚语: Gatz；中文: mao；阿拉伯语: biss；印尼语: kucing；保加利亚语: kotka；马来语: kucing；泰语/越南语: meo；罗马尼亚语: pisica；立陶宛语: katinas；捷克语: kocka；斯洛伐克语: macka；巴斯克语: catua；爱沙尼亚语: kass；芬兰语: kissa；斯瓦希里语: paka。",
  "根据近年的统计数据，宠物爱好者更倾向于喜欢猫而不是狗。",
  "猫咪可以训练使用猫带牵引散步，但需要很长时间和耐心进行训练。越年轻开始训练，它们越容易学会。",
  "猫咪发出呼噜声不一定代表开心。例如产子后的剧痛也会导致猫咪发出呼噜声。小猫也会在哺乳期以呼噜声告诉母猫已喝饱奶。呼噜声是呼吸的其中一个过程，大多数在嘴巴合上时发出。不过别担心，若轻拍贴近你的猫咪时他发出呼噜声，他只是感到开心！",
  "猫薄荷含有一种称为荆芥内酯的化学成分，其作用与某些人吸食大麻时类似。不过并非所有猫咪都会对猫薄荷产生精神恍惚。一些吸食猫薄荷后的良性反应包括：对着猫薄荷嗅、舔、咬、磨擦与滚动等，更会跳跃、发出呼噜声、喵喵声等。",
  "在众多猫的品种中，只有家猫能够在走路时保持尾巴垂直。其他野猫品种都是在走路时把尾巴平放垂下或夹在双腿中间。",
  "兴奋的猫咪会把尾巴保持挺直举高。",
  "猫咪有大约十分之一的骨头都在尾部，尾巴的作用是维持平衡。",
  "猫咪家庭人数最好维持在双数；猫咪最好成双认养。",
  "烘焙巧克力对猫咪来说是最危险的一种巧克力。",
  "猫咪脉搏应从大腿后侧，大腿连接到身体的地方测量。正常猫的脉搏数应为每分钟 110 至 170。",
  "美洲豹是唯一一种不会吼叫的大型猫科动物。",
  "猫的可视角度大约 185 度。",
  "猫咪有刮东西的喜好材质与角度，有些是平面，有些是用来纵向活动一下爪子。",
  "缅因猫是唯一一种美国本地长毛猫品种。",
  "缅因猫比世上最细小的家猫品种新加坡猫体型大大约 4 至 5 倍。",
  "虎斑猫英文名称「Tabby」据说是源自伊拉克首都巴格达的一个称为「Attab」的区域。",
  "能自由伸缩的猫爪是一种将猫与其他动物区分开的其中一项独特物理现象。在猫科动物中，只有美洲豹不能收回自己的爪子。",
  "并不是所有猫咪都会对猫薄荷兴奋。猫是否对此有反应是取决于某种隐性基因：“无基因；无快乐”。",
  "猫咪极速奔跑可达时速 50 公里。",
  "在古埃及，若有家猫过世，家族成员需要剃掉眉毛以表示追悼",
  "猫被驯化的时间是狗的一半。",
  "猫的胡须被认为是一种雷达，可以帮助猫测量它打算穿过的空间。",
  "猫每天可以花5个小时或更长时间来梳理自己。",
  "所有的猫都有三套对压力敏感的长毛－胡须、眉毛和肉球之间的毛发。",
  "人类和猫的大脑中负责情绪的区域相同。",
  "猫的大脑比狗的大脑更像人的大脑。",
  "猫的骨头比人多；人类有 206 个，猫有 230 个。",
  "貓有 30 塊椎骨－比人類多 5 塊。",
  "猫是美国最受欢迎的宠物：有 8800 万只宠物猫和 7400 万只狗。",
  "猫有 20 多块肌肉来控制耳朵。",
  "一群猫英语被称为「Clowder」。",
  "曾经有猫从超过 32 层楼（320米）的高楼坠落到混凝土上幸存下来。",
  "猫一生中有70%的时间都在睡觉。",
  "一只名叫「Stubbs」的猫担任阿拉斯加塔尔基特纳市市长已有 15 年。",
  "一只猫在 2013 年竞选墨西哥城市长。",
  "在老虎和虎斑猫中，舌头的中间覆盖着向后指向的刺，用于折断和夹住肉。",
  "当猫做鬼脸时，它们通常是在「嗅味道」。它们有一个额外的器官，通过一些呼吸控制，猫也可以「嗅」到空气。",
  "养猫可以减低三分之一的心脏病发作风险。",
  "维基百科有一段猫咪呼噜声的录音，为何不可？",
  "世界上最长的猫咪有 1.2 米长：https://www.youtube.com/watch?v=gc5M0aGc_EI",
  "有证据显示家猫早在公元前 3600 年就已存在，比埃及法老还要早 2000 年。",
  "猫的呼噜声可能是一种自我修复的形式，因为它可能是猫在表达紧张和满足的情绪。",
  "家猫发出呼噜声的频率与肌肉和骨骼自我修复的频率相同。",
  "成年猫只会喵喵叫来与人类交流。",
  "世上最富有的猫咪是一只接收它的主人 1300 万美元遗产的猫。",
  "您的猫能够认出您的声音，但它们可能只是表现得很酷而不在乎（这可能是因为它们本身就是如此）。",
  "猫通常会有乳糖不耐症，所以不要再给它们喝牛奶了！",
  "猫最多可以跳到自己身长的六倍。",
  "猫科动物导致了 33 种不同物种的灭绝。",
  "猫为了生存也可以喝海水.",
];

const langName = "Chinese",
  langISO = "zho",
  langLocale = "cn",
  langLocaleName = "China";

module.exports = {
  langName,
  langISO,
  langLocale,
  langLocaleName,
  code: `${langISO}-${langLocale}`,
  codeName: `${langName} (${langLocaleName})`,
  facts: facts,
};