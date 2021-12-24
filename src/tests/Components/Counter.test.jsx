import { shallow } from "enzyme";
import Counter from "../../Components/Counter";

describe("Tests on <Counter /> Component", () => {

    let wrapper;

    beforeEach( () => {
        wrapper = shallow(<Counter />);
    });

    test("should match with snapshot", () => {
        expect(wrapper).toMatchSnapshot();
    });

    test("should match given counter value with component counter value", () => {
        const value = 100;
        const wrapper = shallow(<Counter value={value} />);
        const counterValue = wrapper.find("#counter").text().trim();
        expect(counterValue).toEqual(`${value}`);
    });

    test("should increment counter value by 10", () => {
        // const button = wrapper.find("button").at(0).html();
        wrapper.find("#increment").simulate("click");
        const counterValue = wrapper.find("#counter").text().trim();
        expect(counterValue).toBe( "10" );
    });

    test("should reset to default value", () => {
        const value = 100;
        const wrapper = shallow( <Counter value={ value } /> );
        wrapper.find("#increment").simulate("click");
        let counterValue = wrapper.find("#counter").text().trim();
        expect( counterValue ).toBe( `${value + 10}` );
        wrapper.find("#reset").simulate("click");
        counterValue = wrapper.find("#counter").text().trim();
        expect( counterValue ).toBe( `${value}` );
    });

    test("should decrement counter by 10", () => {
        const value = 50;
        const wrapper = shallow( <Counter value={ value } /> );
        wrapper.find("#decrement").simulate("click");
        const counterValue = wrapper.find("#counter").text().trim();
        expect(counterValue).toBe( "40" );
    });

    test("should not decrement counter if initial value is 0", () => {
        wrapper.find("#decrement").simulate("click");
        const counterValue = wrapper.find("#counter").text().trim();
        expect(counterValue).toBe( "0" );
    });

});
