to get last house id do the following
1. GET https://www.anapioficeandfire.com/api/houses

you will get a link header in response header
link →<https://www.anapioficeandfire.com/api/houses?page=2&pageSize=10>; rel="next",
<https://www.anapioficeandfire.com/api/houses?page=1&pageSize=10>; rel="first",
<https://www.anapioficeandfire.com/api/houses?page=45&pageSize=10>; rel="last"

2. Use it to get url for last page
rel = last => <https://www.anapioficeandfire.com/api/houses?page=45&pageSize=10>

3. GET https://www.anapioficeandfire.com/api/houses?page=45&pageSize=10
get the id of last object in the response array


ALTERNATIVE
1. GET https://www.anapioficeandfire.com/api/houses?pageSize=1

you will get a link header response
<https://www.anapioficeandfire.com/api/houses?page=444&pageSize=1>; rel="last"

2. parse it to get ?page=444
that is the total number of houses