package GooglePlay

// FetchApp `(?:"|')(((?:[a-zA-Z]{1,10}://|//)[^"'/]{1,}\.[a-zA-Z]{2,}[^"']{0,})|((?:/|\.\./|\./)[^"'><,;| *()(%%$^/\\\[\]][^"'><,;|()]{1,})|([a-zA-Z0-9_\-/]{1,}/[a-zA-Z0-9_\-/]{1,}\.(?:[a-zA-Z]{1,4}|action)(?:[\?|#][^"|']{0,}|))|([a-zA-Z0-9_\-/]{1,}/[a-zA-Z0-9_\-/]{3,}(?:[\?|#][^"|']{0,}|))|([a-zA-Z0-9_\-]{1,}\.(?:php|asp|aspx|jsp|json|action|html|js|txt|xml)(?:[\?|#][^"|']{0,}|)))(?:"|')`
func FetchApp(packageName string) string {
	//gplay, err := playstore.CreatePlaystoreClient(&playstore.Config{
	//	AuthConfig: &auth.Config{
	//		Email:    "kabeer11000@gmail.com",
	//		Password: "uganda123",
	//	},
	//})
	//if err != nil {
	//	log.Fatal(err)
	//}
	//
	//Download the latest version
	//reader, downloadInfo, err := gplay.Download("com.whatsapp", 0)
	//if err != nil {
	//	log.Fatal(err)
	//}
	//fmt.Print(downloadInfo, reader)

	return packageName
}
