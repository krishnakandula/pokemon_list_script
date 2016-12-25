# Pokemon List Script
A script that creates a list of the initial data required for PokeManager using the API found at www.pokeapi.co.

## Instructions
1. Clone or downlaod this repository.
2. Run the following command to download the needed dependencies.
    ```
    npm install
    ```
3. Use node to run 'script.js' to begin downloading the data. All data will be stored to a file name 'data.json' in the same directory as 'script.js'.
    ```
    node script.js
    ```

## Commands  
*  start - specifies the id of the starting pokemon  
   * takes a single integer as an argument
	```
	--start or -s
	```
* end - specifies the id of the ending pokemon  
	* takes a single integer as an argument  
	```
	--end or -e
	```  
	
## Examples
* Basic call to get data. Default value for '--start' is 1 and default value for '--end' is 10.  
	```
	node script.js
	```
* Specify arguments for '--start' and '--end'.  
	```
	node script.js --start=1 --end=15
	```

* Specify arguments for just '--end'. This will download data for Pokemon in range of 1 to the value of '--end'.  
	```
	node script.js --end=30
	```
