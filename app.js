function analyzeThis() {
    $('#analyze').click(function(event) {
        event.preventDefault();
        let value = $('textarea').val();
        let valueArray = value.split(/\W+/)

        //word count
        let wordCount = valueArray.length;

        //unique word count
        let duplArray = [];
        const uniqueWords = () => {
            let uniqueWordCount = 0;
            for(var i = 0; i < valueArray.length; i++) {
            if(valueArray.indexOf(valueArray[i]) !== i) {
                duplArray.push(valueArray[i]);
            }
            console.log(wordCount)
            console.log(duplArray)
            uniqueWordCount = wordCount - duplArray.length;
            }
            return uniqueWordCount
        }

        //average word length
        let totalLength = 0;
        const counter = (word) => {
            totalLength += word.length
        }
        valueArray.map(counter)
        let averageWordLength = Math.floor(totalLength/wordCount);

        //remove hidden class
        if($('dl').hasClass('hidden')) {
            $('dl').removeClass('hidden')
        }

        //add analyze results
        $('.js-word-count').after(wordCount)
        $('.js-unique-word-count').after(uniqueWords)
        $('.js-average-word-length').after(averageWordLength)
        $('.js-average-sentence-length').after()

    })

    $('h1').text('Analyze This')
}

analyzeThis()
