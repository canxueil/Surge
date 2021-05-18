hostname = api.m.jd.com

http-response ^https?://api\.m\.jd\.com/client\.action\?functionId=(wareBusiness|serverConfig|basicConfig) script-path=https://raw.githubusercontent.com/JDHelloWorld/jd_price/main/jd_price.js, requires-body=true, timeout=10, tag=京东比价
