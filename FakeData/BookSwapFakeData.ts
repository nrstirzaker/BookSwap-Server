import BookSwap from '../src/BookSwap'

const BookSwapFakeData: BookSwap[] = [
    {

        id: "0001",
        location_nameOfEstablishment: 'Pinnocks',
        location_whatThreeWords: undefined,
        location_address: 'Pinnock’s Coffee House\n' +
            '\n' +
            'High Street\n' +
            '\n' +
            'Ripley\n' +
            '\n' +
            'Surrey\n' +
            '\n' +
            'GU23 6AF',
        location_openingTimes: 'Monday – Friday\n' +
            '9am to 4pm',
        about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas finibus finibus nisl a laoreet. Aliquam erat volutpat. Aliquam ut tortor vel diam vestibulum mollis. Sed lacinia turpis vitae luctus sodales. Sed blandit elit suscipit sem pharetra efficitur. Morbi ut ante lectus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec volutpat nulla gravida neque faucibus vehicula. Pellentesque semper lacus eu enim porta, eu fringilla purus tincidunt. Proin augue leo, mattis vel tortor et, gravida luctus turpis. Nam nec porttitor augue, nec commodo sem. Fusce iaculis purus et urna bibendum faucibus. Nulla congue id lacus pretium efficitur. Aliquam erat volutpat. Praesent non congue tellus.',
        image_reference: "1",
        ageRangeTeens: false,
        ageRangeChildren: true

    },

    {

        id: "0002",
        location_nameOfEstablishment: 'Liberto Lounge',
        location_whatThreeWords: undefined,
        location_address: 'Liberto Lounge Gem House, Magna Square, Egham, TW20 9FG',
        location_openingTimes: 'Monday – Sunday 9am to 11pm',
        about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas finibus finibus nisl a laoreet. Aliquam erat volutpat. Aliquam ut tortor vel diam vestibulum mollis. Sed lacinia turpis vitae luctus sodales. Sed blandit elit suscipit sem pharetra efficitur. Morbi ut ante lectus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec volutpat nulla gravida neque faucibus vehicula. Pellentesque semper lacus eu enim porta, eu fringilla purus tincidunt. Proin augue leo, mattis vel tortor et, gravida luctus turpis. Nam nec porttitor augue, nec commodo sem. Fusce iaculis purus et urna bibendum faucibus. Nulla congue id lacus pretium efficitur. Aliquam erat volutpat. Praesent non congue tellus.',
        image_reference: "2",
        ageRangeTeens: true,
        ageRangeChildren: true

    }
]

export {BookSwapFakeData};