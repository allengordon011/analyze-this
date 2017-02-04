function analyzeThis() {
    $('#analyze').click(function(event) {
        event.preventDefault();
        let value = $('textarea').val();
        let valueArray = value.split(/\W+/)

        //word count
        let wordCount = valueArray.length;

        //unique word count
        //create empty array, loop over items and count
        let duplArray = [];
        const uniqueWords = () => {
            let uniqueWordCount = 0;
            for (var i = 0; i < valueArray.length; i++) {
                if (valueArray.indexOf(valueArray[i]) !== i) {
                    duplArray.push(valueArray[i]);
                }
                // console.log(duplArray)
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
        let averageWordLength = Math.floor(totalLength / wordCount);

        //average sentence length
        const avgLength = () => {
            let sentences = [];
            let count = 0;
            let sentenceBreak = 0;

            for (let i = 0; i < value.length; i++) {
                count++;
                if (value[i] === '.' || value[i] === '?') {
                    sentenceBreak++;
                    sentences.push(count);
                    count = 0;
                }
            }

            let avgSentenceLength = 0
            for (let j = 0; j < sentences.length; j++) {
                avgSentenceLength += parseInt(sentences[j])
            }
            return avgSentenceLength / sentenceBreak
        }

        //remove hidden class
        if ($('dl').hasClass('hidden')) {
            $('dl').removeClass('hidden')
        }

        //add analyze results
        let resultsRender = $('.text-report')
        resultsRender.find('.js-word-count').text(wordCount)
        resultsRender.find('.js-unique-word-count').text(uniqueWords)
        resultsRender.find('.js-average-word-length').text(averageWordLength)
        resultsRender.find('.js-average-sentence-length').text(avgLength)

    })

    $('h1').text('Analyze This')
}

analyzeThis()
