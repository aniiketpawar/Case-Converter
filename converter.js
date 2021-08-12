document.onload
{

    function download(filename, text) {
        let element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
        element.setAttribute('download', filename);

        element.style.display = 'none';
        document.body.appendChild(element);

        element.click();

        document.body.removeChild(element);
    }


    function toProperCase(text){
        return text.toLowerCase().split(' ').map(function(word) {
            return word.replace(word[0], word[0].toUpperCase());
        }).join(' ');
    }

    function toSentenceCase(text){
        let textArray = text.toLowerCase().split('.');
        let result = "";

        textArray.forEach((sentence) => {
            if (sentence.slice(0, 1) === " ") {
                result += " " + sentence.slice(1, 2).toUpperCase() + sentence.slice(2) + '.';
            }else{
                result += sentence.slice(0, 1).toUpperCase() + sentence.slice(1) + '.';
            }
        });
        return result.slice(0,-1);
    }

    const textarea = document.getElementById('textarea');

    document.getElementById('upper-case').onclick = () => {
        textarea.value = textarea.value.toUpperCase();
    }

    document.getElementById('lower-case').onclick = () => {
        textarea.value = textarea.value.toLowerCase();
    }
    document.getElementById('proper-case').onclick = () => {
        textarea.value = toProperCase(textarea.value);
    }
    document.getElementById('sentence-case').onclick = () => {
        textarea.value = toSentenceCase(textarea.value);
    }
    document.getElementById('save-text-file').onclick = () => {
        download("text.txt", textarea.value);
    }
}
