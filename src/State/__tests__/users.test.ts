import { renderHook, act } from "@testing-library/react-hooks";
import { useAtomValue } from "jotai";

import { getAllUsers } from "@Firebase";

import { usersAtom } from "../users";

jest.mock(`@Firebase`, () => {
  return {
    __esModule: true,
    getAllUsers: jest.fn(),
  };
});

describe(`usersAtom`, () => {
  test(`should fetch users`, async () => {
    const promise = Promise.resolve({
      userA: {
        foo: `foo`,
      },
      userB: {
        bar: `bar`,
      },
    });
    getAllUsers.mockReturnValue(promise);

    const { result } = renderHook(() => useAtomValue(usersAtom));
    expect(result.current.state).toMatchInlineSnapshot(`"loading"`);
    await act(async () => {
      await promise;
    });
    expect(result.current.state).toMatchInlineSnapshot(`"hasData"`);
    expect(Object.keys(result.current.data)).toMatchInlineSnapshot(`
      Array [
        "userA",
        "userB",
      ]
    `);

    const { result: resultA } = renderHook(() => useAtomValue(result.current.data.userA));
    expect(resultA.current).toMatchInlineSnapshot(`
      Object {
        "foo": "foo",
      }
    `);

    const { result: resultB } = renderHook(() => useAtomValue(result.current.data.userB));
    expect(resultB.current).toMatchInlineSnapshot(`
      Object {
        "bar": "bar",
      }
    `);
  });
});
