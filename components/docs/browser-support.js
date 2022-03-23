import Image from "next/image";

export default function BrowserSupport() {
  return (
    <div>
      <h2 id="browser-support-">Browser Support:</h2>
      <table>
        <thead>
          <tr>
            <th>
              <Image
                src={
                  "https://github.com/jepso-ci/browser-logos/blob/17f4f7fa25ec38901383fcd49312ca44843e55c5/images/chrome.svg"
                }
                alt="Chrome"
                layout="intrinsic"
                height={"128px"}
                width={"128px"}
              />
            </th>{" "}
            <th>
              <Image
                src={
                  "https://github.com/jepso-ci/browser-logos/blob/17f4f7fa25ec38901383fcd49312ca44843e55c5/images/firefox.svg"
                }
                alt="Firefox"
                layout="intrinsic"
                height={"128px"}
                width={"128px"}
              />
            </th>
            <th>
              <Image
                src={
                  "https://github.com/jepso-ci/browser-logos/blob/17f4f7fa25ec38901383fcd49312ca44843e55c5/images/ie.svg"
                }
                alt="IE"
                layout="intrinsic"
                height={"128px"}
                width={"128px"}
              />
            </th>
            <th>
              <Image
                src={
                  "https://github.com/jepso-ci/browser-logos/blob/17f4f7fa25ec38901383fcd49312ca44843e55c5/images/opera.svg"
                }
                alt="Opera"
                layout="intrinsic"
                height={"128px"}
                width={"128px"}
              />
            </th>
            <th>
              <Image
                src={
                  "https://github.com/alrra/browser-logos/blob/7bfef89b8bc38373d5d062db3aa36d2939e9ab2b/src/safari/safari_128x128.png"
                }
                alt="Safari"
                layout="intrinsic"
                height={"128px"}
                width={"128px"}
              />
            </th>
            <th>
              <Image
                src={
                  "https://github.com/alrra/browser-logos/blob/7bfef89b8bc38373d5d062db3aa36d2939e9ab2b/src/edge/edge_128x128.png"
                }
                alt="Edge"
                layout="intrinsic"
                height={"128px"}
                width={"128px"}
              />
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Latest ✔</td>
            <td>Latest ✔</td>
            <td>
              <em>Not supported</em> ❌
            </td>
            <td>
              <em>Not tested</em>
            </td>
            <td>Latest ✔</td>
            <td>Latest ✔</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
