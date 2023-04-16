package types

type AppRequestVersionInfo struct {
	Version        string   `json:"version"`
	UpdatedOn      string   `json:"updated_on"`
	Architectures  []string `json:"architectures"`
	ScreenDPI      string   `json:"screen_dpi"`
	Signature      string   `json:"signature"`
	Sha1           string   `json:"sha1"`
	AndroidVersion string   `json:"android_version"`
	Tags           []string `json:"tags"`
	SizeScraped    string   `json:"size_scraped"`
	Title          string   `json:"title"`
	Description    string   `json:"description"`  // Markdown Supported
	DownloadURI    string   `json:"download_uri"` // Can be a Kabeer cloud captcha resolver direct download instance
}
type AppRequest struct {
	PackageName string                  `json:"package_name"`
	Versions    []AppRequestVersionInfo `json:"versions"`
}
type AppVersion struct {
	Version        string   `json:"version"`
	UpdatedOn      string   `json:"updated_on"`
	Architectures  []string `json:"architectures"`
	ScreenDPI      string   `json:"screen_dpi"`
	Signature      string   `json:"signature"`
	Sha1           string   `json:"sha1"`
	AndroidVersion string   `json:"android_version"`
	Tags           []string `json:"tags"`
	SizeScraped    string   `json:"size_scraped"`
	Title          string   `json:"title"`
	Description    string   `json:"description"`  // Markdown Supported
	DownloadURI    string   `json:"download_uri"` // Can be a Kabeer cloud captcha resolver direct download instance
}
type App struct {
	ID          string                  `json:"id"`
	PackageName string                  `json:"package_name"`
	Versions    []AppRequestVersionInfo `json:"versions"`
}
