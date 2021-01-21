
const data = 
[
    {
    "objective":"reach",
    "adName":"required",
    "identity":
    {
        "facebookPage":"required",
        "instagramAccount":"required"
    },
    "adSetup":
    {
        "selectedAd":
        [
            {
                "id":"select_sfakhb434e",
                "title":"Create Ad"
            }, 
            {
                "id":"select_fakjbsr35545",
                "title":"Use Existing Ad"
            }
        ],
        "format":
        {
            "select_sfakhb434e":
            [
                {
                    "formatId" : "format_43i74yf3",
                    "formatTitle":"Single Image or Video",
                    "formatValue":""
                },
                {
                    "formatId" : "format_53i7353b",
                    "formatTitle":"Carousal"
                }
            ],
            "select_fakjbsr35545":[
                {
                    "formatId":"format_43tfvfbh"
                }
            ]
        }
    },
    "adCreative":
    {
        "format_43i74yf3":
        {
            "primaryText":"required",
            "websiteUrlToggle":
            {
                    "headline":"optional",
                    "description":"optional",
                    "websiteUrl":"required",
                    "displayLink":"optional",
                    "cta":["NO BUTTON","BOOK NOW","APPLY NOW"]
            }
        },
        "format_53i7353b":
        {
            "carouselCard":
            {
                "headline":"optional",
                "description":"optional",
                "websiteUrl":"required"
            },
            "primaryText":"required",
            "seeMoreUrl":"required",
            "seeMoreDisplayLink":"optional",
            "cta":[]
        },
        "format_43tfvfbh":
        {
            "selectPost":"required"
        } 
    }        
    },
    {
        "objective":"brand_awareness",
        "adName":"required",
        "identity":
        {
            "facebookPage":"required",
            "instagramAccount":"required"
        },
        "adSetup":
        {
            "selectedAd":
            [
                {
                    "id":"select_sfakhb434e",
                    "title":"Create Ad"
                }, 
                {
                    "id":"select_fakjbsr35545",
                    "title":"Use Existing Ad"
                }
            ],
            "format":
            {
                "select_sfakhb434e":
                [
                    {
                        "formatId" : "format_43i74yf3",
                        "formatTitle":"Single Image or Video",
                        "formatValue":""
                    },
                    {
                        "formatId" : "format_53i7353b",
                        "formatTitle":"Carousal"
                    }
                ],
                "select_fakjbsr35545":[
                    {
                        "formatId":"format_43tfvfbh"
                    }
                ]
            }
        },
        "adCreative":
        {
            "format_43i74yf3":
            {
                "primaryText":"required",
                "websiteUrlToggle":
                    {
                            "websiteUrl":"required",
                            "displayLink":"optional",
                            "seeMoreUrl":"optional",
                            "seeMoreDisplayLink":"optional",
                        }
            },
            "format_53i7353b":
            {
                "carouselCard":
                {
                    "headline":"optional",
                    "description":"optional",
                    "websiteUrl":"required"
                },
                "primaryText":"required",
                "seeMoreUrl":"required",
                "seeMoreDisplayLink":"optional",
                "cta":[]
            },
            "format_43tfvfbh":
            {
                "selectPost":"required"
            } 
        }        
    },
    {
        "objective":"conversion",
        "adName":"required",
        "identity":
        {
            "facebookPage":"required"
        },
        "adSetup":
        {
            "selectedAd":
            [
                {
                    "id":"select_sfakhb434e",
                    "title":"Create Ad"
                }, 
                {
                    "id":"select_fakjbsr35545",
                    "title":"Use Existing Ad"
                }
            ],
            "format":{
                "select_sfakhb434e":
                [
                    {
                        "formatId" : "format_43i74yf3",
                        "formatTitle":"Single Image or Video"
                    },
                    {
                        "formatId" : "format_53i7353b",
                        "formatTitle":"Carousal"
                    }
                ],
                "select_fakjbsr35545":
                [
                    {
                        "formatId":"format_43tfvfbh"
                    }
                ]
            }
        },
        "adCreative":
        {
            "format_43i74yf3":
            {
                "primaryText":"required",
                "headline":"required",
                "description":"optional",
                "cta":["NO BUTTON","BOOK NOW","APPLY NOW"]
            },
            "format_53i7353b":
            {
                "carouselCard":
                {
                    "headline":"optional",
                    "description":"optional"
                },
                "primaryText":"required",
                "cta":[]
            },
            "format_43tfvfbh":
            {
                "selectPost":"required"
            } 
        }        
    }

]


export default data;