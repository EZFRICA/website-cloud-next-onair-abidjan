package viewmodel

type Home struct {
	Title    string
	Sponsors []Sponsor
	Speakers []Speaker
	Counters []Counter
}

type Sponsor struct {
	ImageURL string
	Alt      string
}

type Speaker struct {
	Duration   int
	Name       string
	Poste      string
	Entreprise string
	ImageURL   string
	Arialabel  string
	Linkhref   string
}

type Counter struct {
	DurationCount int
	DataCount     int
	NameCount     string
}

func NewHome() Home {
	result := Home{
		Title: "[ Cloud Next OnAir Abidjan ] - GDG Cloud Abidjan",
	}

	gdgbassamSponsor := Sponsor{
		ImageURL: "static/img/partenaires/GDG_Bassam_Logo.png",
		Alt:      "GDG Bassam Logo",
	}

	wtmSponsor := Sponsor{
		ImageURL: "static/img/partenaires/WTM_Cloud_Abidjan_Logo.png",
		Alt:      "WTM Cloud Abidjan Logo",
	}

	gdgcloudnantesSponsor := Sponsor{
		ImageURL: "static/img/partenaires/GDG_Cloud_Nantes_Logo.png",
		Alt:      "GDG Cloud Nantes Logo",
	}

	tfugSponsor := Sponsor{
		ImageURL: "static/img/partenaires/TFUGS_Logo-Abidjan.png",
		Alt:      "TensorFlow User Grpoup Abidjan Logo",
	}

	gdgnantesSponsor := Sponsor{
		ImageURL: "static/img/partenaires/GDG_Nantes_Logo.png",
		Alt:      "GDG Nantes Logo",
	}

	dscagitelSponsor := Sponsor{
		ImageURL: "static/img/partenaires/DSC_AGITEL_Logo.png",
		Alt:      "DSC AGITEL Logo",
	}

	dscesaticSponsor := Sponsor{
		ImageURL: "static/img/partenaires/DSC_ESATIC_Logo.png",
		Alt:      "DSC ESATIC Logo",
	}

	dscuvciSponsor := Sponsor{
		ImageURL: "static/img/partenaires/DSC_UVCI_Logo.png",
		Alt:      "DSC UVCI Logo",
	}

	cloudSponsor := Sponsor{
		ImageURL: "static/img/partenaires/super_cloud.png",
		Alt:      "Google Cloud Logo",
	}

	gdgSponsor := Sponsor{
		ImageURL: "static/img/partenaires/GDG_Logo.png",
		Alt:      "GDG Logo",
	}

	speakerun := Speaker{
		Duration:   1000,
		Name:       "Steren",
		Poste:      "Product Manager",
		Entreprise: "Google",
		ImageURL:   "static/img/speakers/Steren.jpg",
		Arialabel:  "Twitter Mr. Steren",
		Linkhref:   "https://twitter.com/steren",
	}

	speakerdeux := Speaker{
		Duration:   2000,
		Name:       "Julien Landuré",
		Poste:      "CTO &amp; GDE",
		Entreprise: "Zenika",
		ImageURL:   "static/img/speakers/Julien.jpg",
		Arialabel:  "Twitter M. Julien Landuré",
		Linkhref:   "https://twitter.com/jlandure",
	}

	speakertrois := Speaker{
		Duration:   3000,
		Name:       "Guillaume Blaquiere",
		Poste:      "Cloud Architect",
		Entreprise: "SFEIR",
		ImageURL:   "static/img/speakers/Guillaume.png",
		Arialabel:  "Twitter M. Guillaume Blaquiere",
		Linkhref:   "https://twitter.com/gblaquiere",
	}

	count_1 := Counter{
		DurationCount: 1000,
		DataCount:     6,
		NameCount:     " Speakers",
	}

	count_2 := Counter{
		DurationCount: 2000,
		DataCount:     8,
		NameCount:     " Sessions",
	}

	count_3 := Counter{
		DurationCount: 3000,
		DataCount:     150,
		NameCount:     " Participants",
	}

	count_4 := Counter{
		DurationCount: 3000,
		DataCount:     3,
		NameCount:     " Labs",
	}

	result.Sponsors = []Sponsor{gdgbassamSponsor, wtmSponsor, gdgcloudnantesSponsor, tfugSponsor, gdgnantesSponsor, dscagitelSponsor, dscesaticSponsor, dscuvciSponsor, cloudSponsor, gdgSponsor}
	result.Speakers = []Speaker{speakerun, speakerdeux, speakertrois}
	result.Counters = []Counter{count_1, count_2, count_3, count_4}
	return result
}
