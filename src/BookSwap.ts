export default interface BookSwap
    {
        id: string;
        location_nameOfEstablishment: string | undefined,
        location_whatThreeWords: string | undefined,
        location_address: string | undefined,
        location_openingTimes: string | undefined,
        about: string,
        image_reference: string,
        ageRangeTeens:boolean,
        ageRangeChildren: boolean,
        imageUrl: string | undefined
    };