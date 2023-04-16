package routes

import (
	"encoding/json"
	"fmt"
	"net/http"
	T "source/types"
//     "github.com/adamyordan/goapkpure"

    "github.com/n0madic/google-play-scraper/pkg/app"
	"strings"
)

var _app = T.AppRequest{
	PackageName: "com.facebook.katana",
	Versions: []T.AppRequestVersionInfo{
		{
			Version:        "425",
			UpdatedOn:      "",
			Architectures:  strings.Split("arm64", ":"),
			ScreenDPI:      "",
			Signature:      "",
			Sha1:           "",
			AndroidVersion: "",
			Tags:           strings.Split("arm64", ":"),
			SizeScraped:    "",
			Title:          "",
			Description:    "",
			DownloadURI:    "",
		},
	},
}

// APIHome *http.Request means receives pointer
func APIHome(res http.ResponseWriter, req *http.Request) {
// 	versions := GooglePlay.FetchApp("com.facebook.katana")
//     versions, _ := goapkpure.GetVersions("com.daraz.android")
//     downloadLink, _ := goapkpure.GetLatestDownloadLink("com.daraz.android")
//     fmt.Println(PKG)
    a := app.New("com.google.android.googlequicksearchbox", app.Options{
        Country:  "us",
        Language: "us",
    })
    err := a.LoadDetails()
    if err != nil {
        panic(err)
    }
    fmt.Println(a)
	err2 := json.NewEncoder(res).Encode(a)
	if err2 != nil {
		return
	}
}
