function analyzeThis() {
    $('#analyze').click(function(event) {
        event.preventDefault();
        let value = $('textarea').val();
        let valueArray = value.split(" ")
        let wordCount = valueArray.length;

        for (let i = 0; i < value.length; i++) {
            let uniqueWordCount = wordCount;
            if(valueArray[i] == valueArray[i + 1]) {
                uniqueWordCount--
            }
            return uniqueWordCount
        }
        $('.js-unique-word-count').after(uniqueWordCount)

        // for (let i = 0; i < value.length; i++) {
        //     let averageWordLength = 0;
        //     averageWordLength = valueArray[i].length + valueArray[i + 1].length
        //     }
        //     return averageWordLength/2;

        if($('dl').hasClass('hidden')) {
            $('dl').removeClass('hidden')
        }
        $('.js-word-count').after(wordCount)

    })

    $('h1').text('Analyze This')
}

analyzeThis()
