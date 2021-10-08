import Head from 'next/head'
import { motion } from 'framer-motion'
import Header from '../components/header'
import Footer from '../components/footer'
import Cards from '../components/cards'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Caleb Trachte</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <main>
        <Cards />
      </main>

      <Footer />

      <style jsx>{`

        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        @media only screen and (min-width: 992px) {
          .card-list {
            max-width: 1200px;
          }
        }

        h1 {
          margin-bottom: 0px;
          font-family: Liberation Mono, Monaco, Courier New, monospace;
          color: purple;
        }

      `}</style>

      <style jsx global>{`

          html, body {

            -webkit-font-smoothing: antialiased;
            -moz-font-smoothing: antialiased;

            background: #ffffff;
            background: -moz-radial-gradient(center, ellipse cover,  #ffffff 0%, #ffffff 26%, #f5f5f5 59%, #f5f5f5 77%, #cecece 100%);
            background: -webkit-gradient(radial, center center, 0, center center, 100%, color-stop(0%,#ffffff), color-stop(26%,#ffffff), color-stop(59%,#f5f5f5), color-stop(77%,#f5f5f5), color-stop(100%,#cecece));
            background: -webkit-radial-gradient(center, ellipse cover,  #ffffff 0%,#ffffff 26%,#f5f5f5 59%,#f5f5f5 77%,#cecece 100%);
            background: -o-radial-gradient(center, ellipse cover,  #ffffff 0%,#ffffff 26%,#f5f5f5 59%,#f5f5f5 77%,#cecece 100%);
            background: -ms-radial-gradient(center, ellipse cover,  #ffffff 0%,#ffffff 26%,#f5f5f5 59%,#f5f5f5 77%,#cecece 100%);
            background: radial-gradient(ellipse at center,  #ffffff 0%,#ffffff 26%,#f5f5f5 59%,#f5f5f5 77%,#cecece 100%);
            font-family: 'Days One', sans-serif;
            overflow: stretch;
            padding: 0;
            margin: 0;
            height: 100%;
          }

          body:before {

            background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBNYWNpbnRvc2giIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RDRCNjE4NDcxMDgzMTFFMkFGQkM4MzE4NzI4RjhBMkQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RDRCNjE4NDgxMDgzMTFFMkFGQkM4MzE4NzI4RjhBMkQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpENEI2MTg0NTEwODMxMUUyQUZCQzgzMTg3MjhGOEEyRCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpENEI2MTg0NjEwODMxMUUyQUZCQzgzMTg3MjhGOEEyRCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pp/mixwAABMrSURBVHjaNNrnrptVEwVg26/r6SUJINAn5RL4QReIIv5yP1wvEYKEJKfYx93+1rMzsXTk8u4ye8qaNbNP/88//7wZjUbz4XC4PT097f/777/Dw+FweX5+/nh/f396cXHxfjqdDheLxWCz2Uwydnt1dbV8//797OTk5Onx8fF6Mpls1+v1tt/vTzPmeH19vc4avcwZZuxiu92e7na7TS+vrut6GTPNx37+jpn7OBgMevP5/DzrLZ+eni7y/pDxvaw3zvs+ax3zN87vm6xl/2P2P7m8vHxaLpfDzBkNIvDd8XgcZEEPx9loeHNz8y5CdHm/ywEHmXvIgVaZeJ8Nz/I3zoEOEWh4e3t7F4GWOewgf/cZ3+XZOmt2+dzLAWcRdDEej7f5bZKDTyLQY/ZZZt4+awyMyWttz8xZnZ2d7TJ2ljlP2XOTw4xevHgxz5xN5p9n/17k3eV9lrmjjOt1v/766zCan+z3+1FOdh4tPD1//nxHSw8PD6N83+Rzd3d3d5rTn2WBjc0yfk+wPN9nwVPWiVC9HH4dq15n03UOtmKNDO2i0WEs/pTv/awzzfhefptk7UPGHnOoXcZdRAmLrNvP35rS8vsoh1zaIwcaZP1tZBnngOuM3WfuNr/tup9//vmQDbscgjCLZ8+erV69evUsg1ZcJhtNnToTaHxF8PzWp/kIwio0vMomkwg4obUIe5Jx5u7zfmS5fOYex2gvMh5HGUN4ml1Tot+zzziH3axWK+53lgOsMm+Xdc/J49AZ06McrllKnDp499VXX11GwCcb5uVpZNrR7gU3y+vJqcUQV8giw7jjQczkfc01xFasesmaGXfM9yP3ioA26dFenh3snOd8fhPBBxF4xuIUGQHbAfLMocbkobjsc5UDzY2NwrZCIPIcynsG+c1BR4MIN8iPs2xM49zmGAGHtQELCMSLbMTMg+yxisvNMo7wwxy6y0K7zHmfA4xz0DP+nzXJs40gNqTtfWLwLIfr59l13oeJhfsooh8h+1nzNnGwye+bHB4ADAloXUJn7XxdOnxHhsx9l7h9oLDIsuRzD9l8GqGof8eXBVcWZEKbzoJC82hilUn9CHOazw9ZSLAy/zbCnGbDbeYJaFZi2d7bt28h0btsPszfadx2Ll6yjnjYQ6QI01w2oPGUtad5NuF6ebzN3C4y9ApRxS2EOsuBTiLngIzZayRWu2+//XbKlwUwNxELOfG6AnEL3rhUNhjbPALm42gYK43EVITpc72MIyD/HEXok7zbuG/t/AnOTaxzyPgz8yAaBIqAa3tQVJ5f5FAPUc7B+Hfv3k0JnWdzlgdAeb4VOzlQn9LBef72TNWr13ke9P/7779nTpoNFgI5r14Wu82mEIy/PzoPxAh6nGSD8whNkB0B8hnUbzJu9+mnn/JtcbKBjHl+lB94gPdYdQUNWTHrn0SBCzJk7Plff/3VLJh1O/MO9cp6QKKf30C0zcb5vB/y43zo/CbZ5cW9ZiK+YO8srvXOIoLMRvw0rrSIdvo51EHQi4mMnRBOwOb7MHFB812WmpZWaXCXPeWGHavQJojNi6seAUQUJkEPxEiGLXMw2ren+WCZC0bPm3MJW+IeJEvCYglMYM6SQ17TUIKv+Wo23cVK01jokAnTHGLEZzNWXKzyeZqFuR/zrTP2Ni7wUDEgL8gd/Lnz99lnn7H0MWtdgGSQKuFKoJAv+465EBf3nj2WeZ9EaVz0mP0hWh/qSdwZfxaFHbvvvvtumCC7LogUuNPKwk0L8F7Wjun5J1PS7kI8ZOMT0CgH5fnzrPH+k08+4U5MO4wlH3OYlkfsLY/k5YAUJDZOWUiGZuooy77gXC5yIJn8Vvxk3V0+N5TMfpcVDmhRc+nul19+meYDbnMaLZ9EwzgRrEZXtkGTDSiWrNg/gTqPYMa1BMVq4kMcWIO9CZpDLzO8BbQdURCZOWuBT9kYcGygYmB3gWNlmNwDPKzHimKpJVZcLDLgZyvxWwmRT+7yedz9/vvvzGQgQgjKliAt2l1RH3eCUISKGyKJxliwKxcDz2vuCSTyWwsnXCzwO/WMW0CZ+DMroDXyxpASKI27VPITuI1AQlC0h8A5AOvOxafAzmtQoHKScV3GDGloxxLxxXl+eBvtDrNoL2gy5a8ZPIoAmyzCJbBRWhInx8y7pgRC5d3BuAROtYowlzmMNYZZyxo27rLxuFwLZ9pDRXDu4BF2I+i5lgDhMpmf85wcMvYq8XeJBeNWeV1GAZR/5B3d999/fx5tzmVg9NhmWYM1hllgnwOCTpqa5bdF5QebyB2zzJnHSigDV5RrGs0Iei3Eu8+IZJSE1sx6H3xih25EAJaGQpBwgm9lnQl63gIgyfCDkxxBLoq0dNhiFPbAxs1boyigTiLDcHuCMYudQA1aD5NVB6zQiCSoi49EL9o5z/N7ySyHMpZU6PquYNrhpmJFpodAH10OPeHvKH2ezbgeX4dm6Ihah+X4Prn6H4jgIAccgN7ISSFiDthQVq9lcg9ZAWJhr9DCovw5mxxygP/F3I9oRJ6j1d3Lly/vBS92GrfxASlUgKEtiNw0UP6YQzvQZbTIHSU8kIqqzDIPtCoJIOWO9jPnX5wu87kyJBN/ArzJp3rIvB745atNgKQ8FOU8G4uBoVigPewVYskPIJFWwSFAEnA4klpF4qRlCpMY80fDXAZJhIaNWEaTjWLQMATKYW8Iy7rWE9SqS1rOPvxeQHuXdBvkZr+Lqg6X3DC/OzgqRQ75aHCQYRVM2GXeCdrJ3hFAZr8o36YhccLkB2gTQZ8kqVjsivA2jrZH2HHW2dNq/Nj7aR1E9j4UbK+xA7VI3PQ0VjNfTPRAchRij3H2hoSS9ibxgTX05bHI57lD7iDeIHzmUYCJwSy8l+QyGT+SrfGrJxZTT6AWWWibMTdZeIaREi7zUBjgYNMHeQGXEvgqP5tSVl6nWQd/m2ctLitgldDWxyAuwDfXw7FUjnIU5ENArY+0RjFjcW1PilLBdt98882g/HCPuKnNWUH9HQEugziSVcN8AZkxZ3yf7dGUCDfldsCAlcAv5Kv64cLc4mW0jQGzqJiSeCmNa88zZ1b0XULtR0AeIr9pMix9z0HP0HfBz6rZUzCD353Ewsf6EgvNg9EE9Wu0xICg1nM0XI6QKHOId+WTKDkU2sRvH2JZRRmKM+GWQCQHQMl7aH1ipovQkuEx41kWI1hGyHelYTRcBbiNDFf2qLkD9P7169co/xw4sJTnoS3LrCdOB4QVQ+PSrgKGJiZZbCA5ZdIiC8YQj1Mog0dhpSpKlZm8YiFwGpe7wq+iPW0ahdWlDopDIYbKVDAsLUAdbRyKU2NkTAtyDCACvuEhYiufVyrXrPuU+Y3iNLgdDLSeKHIBWAij+bArZOqXoDK6Vg5YbJzDGHUC0ogwQj7a5bs5pPEtiG1Stf+0KDtAWVZPbI0Aisk86xMwz9QitKp8hV4XAIA1ipJsi+thx8oLSmPNJ+Uz95MSBgqb+B4CM9ZUyI9yhYhEO2hzzgK0yjJcKeOecB05ArvVOCu/nqcg+nT0obDhxw1uxU3GrKsHZeMjv5fsMu9a2VztHoRRr2tfDcDl33//zVUpRTG3iluuvvjiCzIhpGfK3+Y5+lqsIMiRM6YvhNq/efPmmUT0oUHY8Ud+rtkASllFEwKUcsNB5Q45xKHQmW2Q6bIOOlVbyFP6UgSGPHlhsjovrWQo8jmjvFgE72plsJo/31sGjlwUj1RKE1jIpvvjjz92cgftgDoBLMvC+wgj4fDJadGS65SvOhwGdig9vy6tt4YDqxSbbU0DlZ74ysbz6kchl809CKPKy3fWEsAn3A/n4lJIo8PKM7wAGuJo6pfEju/rWJbrHbuvv/5au+YQUw6LDzFvMzF3q6yt6GK1JzyHBvAcJpcvxIH8IjnGj7lKq8FxNFCu1RpFncjKYq1iEA/jnisNhuqB6XiqQ6Co+GkgpP6AXhi1XMflQLF0UIyj63777TduAXnkEloaCaxqLINkiadXGzQiirZUu2aPeSo31RoSoORUINACFEyCWy6F4lTOaW1QAQ6tuKESPgeaY8pVpY4b7w/P4vL2Ah7KZRRFgcWl9Qvwwe7HH3/sKlAFpybEysPqUHS0SMB8BXf74ldM7zm0w5l0Ca9UkZiCTrmCCqJppulvqVfksWrc9YstTCXIsj5klEMmYB6s6y5+AMwp1z0qxTUAIZcECQnVSw7k5Us/2hc8AvuomKnG1zQu0lVPqV8xsKQdlRq6oXrMb3jPhvaSQBsbQCsEp025T9a50I+SS1wbIIGsWu48KeagJFDoqe8HVXTNHQCrlighZ9Z/z2A4VtUqx5bUEDXcJotrMltYbGzFhHoBzdDiz28kAMX7wGJjnUBAh5BAAtM7viYGigXfojp5vc5hdOblFq3QR8KERfD/VbWFJE2K07G5LhSTCvphFPc+K6j03sgvnnlLs37Rbn1eWP5J4PIW99ENR/ZApuSkPSRoEUfazoK3GshamIkZHRaHHmVRdyRK1l6xhX2e3yGFfFwnJr+3WwljtJoikGsI9IYCd9Xwe8zeYkJ6aIVZ1nlA9aFh9dc0FaeRoafUvdFMaBV9siyKoRZA5iAM0xUkb6ojzv1agHJBc917VNNAPdISJCQhkMsiWhSwACHxojTVlpVHjnUN4RAxzm0Mce+Z5NcsozsDwNToLObwlMPPVaKR4xGHkxC3Fs0mArkXN3mRAzyi3Toq+E0dRnZdVXHEjRpJdDnjmoD2BauDiGaxwWPQmmA+9+nXlRsar0wVi2eRB7V3zbBzYwYU6mKocT2BEyVpRSnOJlEIGiSuAY4Oi47lUakLESZZhNahjEQzKvdq7RYFv1hi5iymitvK+nAeZCpw4Dz3+NCjOIJiNbZDPbx69WqW57eAIn/vq1soThzmQTJmWSChcmVJQiudsZ0w39bgc7GjhOYNErFK1Y0AluHU7dqLxhUqXIsLucuoXtLAlYNiy9VBFtKS0aO6p1k5yAasE5locqdizAGWDhH4lvR2n3/++T+yv2SowjPXmByWwOOPcA/VNAyz11vxArLzfZE1oWAvzOJBZpf5KdxhFGndl19+eemEDlH3GrSIpQpWRdM+vqsVYy8W232oawYfixrdZD1dzTvXdJNs9rEhDfjV18pXGkX0LlEUjADpFCMOipPJ2tVQMBef2tX9pLbttmg+pO2KdWixjhu6JSG2JgGXYSI1Ag2BNa6C/whUGZnGtIskoIJh1Z+6fe8ug7u4fY2wx3K3UV2qgkgo226Pi2SKO/nLra8+lx4yijItInqoa43WB6agqipdT8j2NKuR/aQziaJALPRE/UsbndPjThbNYuoEHKkRuOrLtsvN0oZMuamebru0+Uj7QToCSGMZj9p3srbvNO03FV/RGtRDUPdKaYNSUqt3bJbDtluq6gGwjCKw3cW3Jhy4dUKE0MCqqzXm5vFhfn3FpBgARoq0aUwEdt9ro2YOqq6+fqbWiFUcHCA8l1y1dDBcyVZSlAihovySd3tzV7HRelhBOXeLAIILgW2uDY7XegFiuCjOWM+sFVYfL1qyYHMnMSAx4VvVwkfB5ZazKOUpCWwsmOufA8BwqzHcE2bDt9zB72LA/WQ2W1Xx1Wt4H+zX08rvj7RJWYQs0ODzrtxG4WySH/BAh/iYO8bbrIEXQju55pjPd5Fl3v3www/QwIWPbgmOM/JZspN0YpFFBCQIl3DR79JTIkPr97QJ19XaOvjuQpL0Lkrgxna5GUSrbiQCxt/b7VPd+CqhjRdArUTOevJF68lhysarjQI8+ghaUidKZQp0S9z99NNPaumGIrI2ZEAEmZSPxxVuogV86kVdmW3rXpzvtgtQDTSlK5ML7szVBj3RZmKd6rgMqlCTmT927FvzyhjAoKgSe9yccqKoQ5XH8ph9FmV9zyBar9xWnA3WZV7+O8W1XHAWdYYy+BW34Sba+5fVXJCFWUBjb1sN6dY7xqc0EpDKxMl13UJBmlE2v9X5qH8OcCpXDcbrB3NxF6ksR2gXpI3hRpEo/g24r9tcnqCpvmlNDFVZqPetTZG/JK43mYxpMut5XOK5gSDPNcLLly8fuE/cTyfeVfMh80E2Cn5Xm4zrspMCXkuS8gJrUQyyh0vFTcShtf2DARBY1fWDjG6NJSjG43QpdTTBvt9keGjJhSmotWqiAUzh3O2UPOImiH/iN+i3Ap+1YDbmm4Ms6/6wtUTz/bKEUMPsqlKEKLjVDAF1Z1//xsEXuNDmn3/+0VAY11VFu2qWGOteRHyRZRarYoraVIBE4IN17qQ+aoka05SdCU2D/gui7/LGvx61RNN1vUpifB/bRAyvxQWXJKS798otco/x3EgeWNQNlGqvtdjzWf3e/uUpME0YrdrzJExtVTmr5SSFlmuM+g8M9fm8/g9F25aCWuvVfXzkXWOoZ6iIGIjG22V8NOAOT7kqq6ofurqK1qSYlWn9X0m7kdSI1mSzUX5r/3hQ7SLXDzoj6lvMQS7SgblwrcdCmALUkvSqkdEuP9UrdXn6GDnuqkOv1apBeEyscuV20xyZJv8XYAAkqEyAIQyUBQAAAABJRU5ErkJggg==);
            position: absolute;
            content: '';
            opacity: 0.9;
            height: 100%;
            width: 100%;
            left: 0;
            top: 0;
          }

      `}</style>
    </div>
  )
}
