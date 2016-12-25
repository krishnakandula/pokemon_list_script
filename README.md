# Pokemon List Script
A script that creates a list of the initial data required for PokeManager.  

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
