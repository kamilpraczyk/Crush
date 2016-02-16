#Run android
cordova run android
#Run browser
cordova run browser

#Build android
cordova build android --release


#install purchase package
cordova plugin add cc.fovea.cordova.purchase  --variable BILLING_KEY="<BILLING_KEY>"