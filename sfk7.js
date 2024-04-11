const {
    unmap,
    iunmap,
    vunmap,
    aceVimMap,
    mapkey,
    imap,
    imapkey,
    getClickableElements,
    vmapkey,
    map,
    cmap,
    addSearchAlias,
    removeSearchAlias,
    tabOpenLink,
    readText,
    Clipboard,
    Front,
    Hints,
    Visual,
    RUNTIME
} = api;
// set theme

/*
settings.theme = `
.sk_theme {
    font-family: Input Sans Condensed, Charcoal, sans-serif;
    font-size: 10pt;
    background: #24272e;
    color: #abb2bf;
}
.sk_theme tbody {
    color: #fff;
}
.sk_theme input {
    color: #d0d0d0;
}
.sk_theme .url {
    color: #61afef;
}
.sk_theme .annotation {
    color: #56b6c2;
}
.sk_theme .omnibar_highlight {
    color: #528bff;
}
.sk_theme .omnibar_timestamp {
    color: #e5c07b;
}
.sk_theme .omnibar_visitcount {
    color: #98c379;
}
.sk_theme #sk_omnibarSearchResult ul li:nth-child(odd) {
    background: #303030;
}
.sk_theme #sk_omnibarSearchResult ul li.focused {
    background: #3e4452;
}
#sk_status, #sk_find {
    font-size: 20pt;
}`;

*/


mapkey('yq', '#7Copy pre text', function () {
    Hints.create("pre", function (element) {
        Clipboard.write(element.innerText);
    });
});

     mapkey(',', '#8Bookmark current page to selected folder', function () {
            var page = {
                url: window.location.href,
                title: document.title
            };
            Front.openOmnibar(({ type: "AddBookmark", extra: page }));
        });
//����
map('\\', 'gi');

//����
map('j', 'd');
map('k', 'e');
map('q','o');
map('gxz', 'gx0');
map('gxc', 'gx$');


//
map('p', 'cc');

//��ǩ�л�
map('w', 'E');
map('s', 'R');
map('h', 'E');
map('l', 'R');

//�ƶ���ǩ
map('H', '<<');
map('L', '>>');

//��ҳ
map('[', '[[');
map(']', ']]');

//�������ۿ����ٱ�ǩ�����ÿ�����ѡ���ǩ,�����ݼ�
settings.tabsThreshold = 100;

mapkey('yet', '#7Copy a table', function() {
	Hints.create("table", function(element) {
		selectElement(element);
		document.execCommand('copy');
		// Clipboard.write(element.innerText);
	});
});

selectElement = function (el) {
    var range = document.createRange(),
        selection = window.getSelection();

    range.selectNodeContents(el);
    selection.removeAllRanges();
    selection.addRange(range);
}

mapkey('gu', '#save url file', function() {
  // ��ȡ��ǰҳ��� URL
  var url = window.location.href;

  // ��ȡ��ǰҳ��ı���
  var title = document.title;

  // �����ı��ļ�����
  var fileContent = "[InternetShortcut]\nURL=" + url;

  // ���� Blob ����
  var blob = new Blob([fileContent], { type: 'text/plain' });

  // ������������
  var downloadLink = document.createElement('a');
  downloadLink.href = URL.createObjectURL(blob);
  downloadLink.download = title + '.url';

  // ģ������������
  downloadLink.click();
});


addSearchAlias('t', '�Ա�', 'https://s.taobao.com/search?q=', 's', 'https://duckduckgo.com/ac/?q=', function(response) {
    var res = JSON.parse(response.text);
    return res.map(function(r){
        return r.phrase;
    });
});

addSearchAlias('a', 'Amazon', 'http://book.ucdrs.superlib.net/search?&ecode=utf-8&channel=search&Field=all&sw=', 's', 'https://duckduckgo.com/ac/?q=', function(response) {
    var res = JSON.parse(response.text);
    return res.map(function(r){
        return r.phrase;
    });
});

addSearchAlias('q', 'ȫ��ͼ���', 'http://book.ucdrs.superlib.net/search?&ecode=utf-8&channel=search&Field=all&sw=', 's', 'https://duckduckgo.com/ac/?q=', function(response) {
    var res = JSON.parse(response.text);
    return res.map(function(r){
        return r.phrase;
    });
});
