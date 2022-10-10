
/**
 * @fileoverview Template to compose HTTP reqeuest.
 * 
 */

const url = `https://xg.nsmc.edu.cn/SPCP/Web/Report/Index`;
const method = `POST`;
const headers = {
'Accept' : `text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8`,
'Origin' : `https://xg.nsmc.edu.cn`,
'Accept-Encoding' : `gzip, deflate, br`,
'Cookie' : `SECKEY_ABVK=dmxN8N2qVMG7+wHVu7dF4hLqqDkz1NTv9qqf52RDnOU%3D; CenterSoftWeb=E5E81595F39D09F7D62A778B4C942EDB6AC8AF151A49741B45F196834A7C197B225A804496A4E6C7EF7811BAD8062BA62AC9784C3BF612CDF16AF7F2C10F0C450DE8311DCA3F0B8EB89793F4440535810119F0C50083AF16E93A8F371D4BCFC6E213AA390DE5F125D8B5CFCB0FDBD8038F37C720ADB76A902790EF2F208F9295EDE87ABC5C1FA2227B839BB47250F9973B694E0032402D871B768C87E7CC108DC1756F8E519E0FB3DD62A1586E6E3968A1E5F164DEE5DA5CE1415A13F891E0436932F5D6856CAD797613E347530B59B96A2FD73CE343C4D1E825AE202792C622ED73BD7B83E99F60C1B444A5597C6AC67D5CF90D9B7AE73A5CEDE1A9C190BB14FBB7A5B7EEC45A73E3EA6D0C91A504E0; ASP.NET_SessionId=ys33e10svszj1mlesaax1zzw`,
'Content-Type' : `application/x-www-form-urlencoded`,
'Host' : `xg.nsmc.edu.cn`,
'Connection' : `keep-alive`,
'User-Agent' : `Mozilla/5.0 (iPhone; CPU iPhone OS 15_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.3 Mobile/15E148 Safari/604.1`,
'Referer' : `https://xg.nsmc.edu.cn/SPCP/Web/Report/Index`,
'Accept-Language' : `zh-CN,zh-Hans;q=0.9`
};
const body = `StudentId=202102011929&Name=%E9%BB%84%E6%96%87%E6%AD%A6&Sex=%E7%94%B7&SpeType=B&CollegeNo=01&SpeGrade=2021&SpecialtyName=%E4%B8%B4%E5%BA%8A%E5%8C%BB%E5%AD%A6&ClassName=2021%E4%B8%B4%E5%BA%8A19%E7%8F%AD&MoveTel=15523897302&Province=510000&City=511300&County=511303&ComeWhere=%E5%AD%A6%E6%A0%A1&FaProvince=500000&FaCity=500100&FaCounty=500152&FaComeWhere=%E6%96%B0%E8%83%9C%E9%95%87%E5%9C%86%E9%80%9A%E6%9D%914%E7%BB%8421&radio_1=22d924c4-6404-48c1-9735-712d80e83f23&text_1=&radio_2=33a7381a-cb78-4167-afd1-2f09e36c221a&radio_3=5e2d9542-9dcd-4b36-b0ba-48e3c5ea275d&text_2=&radio_4=af8acc03-945f-471e-b691-45b6e3ce39eb&text_3=&radio_5=4b28f5b1-528c-4783-8b89-6afe0b21c370&text_4=&radio_6=43d283b6-8474-4e5e-96f7-f4a611c715a7&text_5=&radio_7=7c0c2dd8-35f8-48a9-a13c-33555a42b689&radio_8=835d35fa-521c-4064-900b-4d4c5162241a&Other=&GetAreaUrl=%2FSPCP%2FWeb%2FReport%2FGetArea&IdCard=500223200309098051&ProvinceName=%E5%9B%9B%E5%B7%9D%E7%9C%81&CityName=%E5%8D%97%E5%85%85%E5%B8%82&CountyName=%E9%AB%98%E5%9D%AA%E5%8C%BA&FaProvinceName=%E9%87%8D%E5%BA%86&FaCityName=%E9%87%8D%E5%BA%86%E5%B8%82&FaCountyName=%E6%BD%BC%E5%8D%97%E5%8C%BA&radioCount=8&checkboxCount=0&blackCount=5&PZData=%5B%7B%22OptionName%22%3A%22%E6%AD%A3%E5%B8%B8%22%2C%22SelectId%22%3A%2222d924c4-6404-48c1-9735-712d80e83f23%22%2C%22TitleId%22%3A%2232c4b8f3-d0a2-47c6-a180-3cacda05649f%22%2C%22OptionType%22%3A%220%22%7D%2C%7B%22OptionName%22%3A%22%E6%AD%A3%E5%B8%B8%EF%BC%8C%E6%9C%AA%E9%9A%94%E7%A6%BB%22%2C%22SelectId%22%3A%2233a7381a-cb78-4167-afd1-2f09e36c221a%22%2C%22TitleId%22%3A%22179ce351-cb83-483f-b9c0-4016646bdb25%22%2C%22OptionType%22%3A%220%22%7D%2C%7B%22OptionName%22%3A%22%E6%AD%A3%E5%B8%B8%22%2C%22SelectId%22%3A%225e2d9542-9dcd-4b36-b0ba-48e3c5ea275d%22%2C%22TitleId%22%3A%22b6084bf4-b05a-417c-a3b3-88a52f07d913%22%2C%22OptionType%22%3A%220%22%7D%2C%7B%22OptionName%22%3A%22%E5%90%A6%22%2C%22SelectId%22%3A%22af8acc03-945f-471e-b691-45b6e3ce39eb%22%2C%22TitleId%22%3A%220088c233-12d0-4a8c-81c4-79c95efaacef%22%2C%22OptionType%22%3A%220%22%7D%2C%7B%22OptionName%22%3A%22%E5%90%A6%22%2C%22SelectId%22%3A%224b28f5b1-528c-4783-8b89-6afe0b21c370%22%2C%22TitleId%22%3A%22295fa2b9-b4b0-4ba5-ab41-8c2c0a357053%22%2C%22OptionType%22%3A%220%22%7D%2C%7B%22OptionName%22%3A%22%E5%90%A6%22%2C%22SelectId%22%3A%2243d283b6-8474-4e5e-96f7-f4a611c715a7%22%2C%22TitleId%22%3A%22534f3f18-1164-47b4-97f8-cb3b947738d6%22%2C%22OptionType%22%3A%220%22%7D%2C%7B%22OptionName%22%3A%22%E7%BB%BF%E8%89%B2%22%2C%22SelectId%22%3A%227c0c2dd8-35f8-48a9-a13c-33555a42b689%22%2C%22TitleId%22%3A%227438db91-f335-4b13-ac7c-5654c9789b73%22%2C%22OptionType%22%3A%220%22%7D%2C%7B%22OptionName%22%3A%22%E6%98%AF%EF%BC%8C%E5%B7%B2%E6%8E%A5%E7%A7%8D%E4%B8%A4%E9%92%88%22%2C%22SelectId%22%3A%22835d35fa-521c-4064-900b-4d4c5162241a%22%2C%22TitleId%22%3A%22190616f4-38b7-4670-bd06-04087d90a569%22%2C%22OptionType%22%3A%220%22%7D%5D&ReSubmiteFlag=7930e212-d2b6-417e-81e1-e0395c98e185`;

const myRequest = {
    url: url,
    method: method,
    headers: headers,
    body: body
};

$task.fetch(myRequest).then(response => {
    console.log(response.statusCode + "\n\n" + response.body);
    $done();
}, reason => {
    console.log(reason.error);
    $done();
});
