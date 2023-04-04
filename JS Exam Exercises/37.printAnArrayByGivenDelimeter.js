function printAnArrayByGivenDelimeter(arr, string) {
   return console.log(arr.join(string));
}
printAnArrayByGivenDelimeter(['One',
    'Two',
    'Three',
    'Four',
    'Five'],
    '-'
);

printAnArrayByGivenDelimeter(['How about no?', 
'I',
'will', 
'not', 
'do', 
'it!'], 
'_'
);