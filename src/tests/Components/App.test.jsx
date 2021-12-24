import { shallow } from "enzyme";
import App from "../../Components/App";

describe('Tests on <App /> Component', () => {
    // Default Testing
    // test('should show name on component', () => {
    //     const name = "John Doe";
    //     render( <App name={ name } /> );
    //     expect( screen.getByText(name) ).toBeInTheDocument();
    // });

    test('should snap with the snapshot', () => {
        const name = "John Doe";
        const wrapper = shallow( <App name={ name } /> );
        expect( wrapper ).toMatchSnapshot();
    });

    test('should show given params on component', () => {
        const name = "John Doe";
        const subtitle = "Lorem Ipsum"
        const wrapper = shallow(
            <App name={ name } subtitle={ subtitle } />
        );
        const h1 = wrapper.find("h1").text();
        const h2 = wrapper.find("h2").text();

        expect( h1 ).toBe( name );
        expect( h2 ).toBe( subtitle );
    });

    test('should *', () => {
        const wrapper = shallow( <App /> );

        const h1 = wrapper.find("h1").text();

        expect( h1 ).toBe( "" );
    });

    test('should show default subtitle if subtitle param is not present', () => {
        const name = "John Doe";
        const wrapper = shallow(
            <App name={ name } />
        );

        const h2 = wrapper.find("h2").text();

        expect( h2 ).toBe( "Subtitle" );
    });
});
