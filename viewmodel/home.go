package viewmodel

type Home struct {
	Title    string
	Sponsors []Sponsor
}

type Sponsor struct {
	ImageURL string
	Alt      string
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
	result.Sponsors = []Sponsor{gdgbassamSponsor, wtmSponsor, gdgcloudnantesSponsor, tfugSponsor, gdgnantesSponsor, dscagitelSponsor, dscesaticSponsor, dscuvciSponsor, cloudSponsor, gdgSponsor}
	return result
}
