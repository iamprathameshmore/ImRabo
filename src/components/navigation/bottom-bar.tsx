import { Link } from 'react-router-dom'

function BottomNavigationBar() {
  return (
    <div className='fixed bottom-0 right-0 w-full p-5 text-center bg-zinc-50 border-t-2'>
        <ul className='flex justify-around items-center'>
          <li>
            <Link to=''>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAtUlEQVR4nO3SP2oCQRhA8Z8WYitYS5qUYqFXsPMUdt4iV8gd0uUQAcXS1kYrEa3FToSRwAjLsv7dBQv3wYMphvcxH8M70cIs+n8ulDZWCNENukXF+9gl4mf3GOSND3HIiJ89YvRMuIKvK+G036jeG6/h54F4iP6ifivewN8T8RCdonkp/oF5jniILvCZjnewLiAeolv0kgOWBcZD4iWZ5A3f5GUD0pQDlCu6yCTjh4xz3CtxlRNLzeteM7X5aAAAAABJRU5ErkJggg==" alt="home"
            className="h-8 w-8 rounded-full"
          />
            </Link>
          </li>
          <li>
            <Link to=''>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEI0lEQVR4nN1aTW9NQRh+mlBJ9dr4WCj9WlI7lARF0upKpLEkdC8+dhokQqtVRb+3DU3shGoToSwpCyv8BN9JJegVtKm8yTPJa8ycc2/PnHvpk8zinpkzzzxn3nln5n0vsMhRB6AXwCsA31he8ZnUpY1NAPqS8JcCGAIwB2DeU2YBDLBtaJQCGE7KLxWPIzqwy6PAYoLxD1kNxwDsBrAcwCoATQAmrTb9AYXITOi+RVQjgJUcwx4A9+L46zhlpsHpCMIL1jRvDLQmtDldB1DiaXsmir/XmgnBUgDdAN4D+ASgh88ED1X7awGEaP6nFCFcV8n9gWMx/BM+/teqQsxJ0Omwyyus26a+4MsAQjT/dj7rcfB3sW6vevYH/xdVkeGzN46OsgAqrDUl7yaF4b/F3xXksvnFOgQr1LMvPiGrI4RIucl6EfwMwOcAQqSPKQ5QMOrhfsf6NT4hemrFOwkuRbi+I+rLhPBcfcoSWiN4jWk1+0yr1/LPgiV80TXFPwG0IDwOsm+XSXdxTLD2m2tR7rdd1Ym93nB0/gvAqQg3mQ9K2NcvB88IgLWqbbvlfjfYnQ1YHcjmt1XVH/V8LXHX1QlEVAG46+j3B4BDqt1my+3P0yT/QinNSjcUFzuo7LclYurFNdfmIaCW72Q9IvazXYZjmHN8aLOvOMX0W2ZmNikj5mTEYpyj/cru28CvXcZSxWdn2CbqYHhMiZiy6mY5E14RGhu5iMQjfKV77FP27DKFUOW2Gkcfub9yLFddayIJ1gOYSUFEljNXUHSnIKQTRUCVYy0lK
            bJmkni/RMjnIhRXxAsVDfpukLRE3YFSR0NAITuKKaQmoJDKYgopCyhE+ioayheLkJqAQgq+EWrsCihk52Jxv23FFBJyQzQ304KjNuYonm+RvmTNFRyuuFPS0l1oEWke46vTzI9MMx5rLlZjKYgwRS5tUEHA6ZD5kSfqqnsqxs4neQDcyWOHuepW8lkb20StrxPkkizAixD5kTm+lFFxJ1fIZoZxp3w2teoc42YZRjcXnB+Rr7ZF1bd6Iih3Eh74Kj0xgJ8MQRnUA7ifb37kohWgG/UQHUc4iDm5PpRwr1PtzuWaH5m08iO+uNMBhEeLR8x3jsWETB/kkh9pyiG4cFgFseUjJEW/isS35hCcaMwlP2LSCh88nY0oEc/pHpNimimKZfztWtzzTHWAY4zNjxgP9d7RUVYFlIdTSPR0xiR63rI+4xOiTUuyp4LLEUeI+pRSb7MMVoNxYZu/Iy71phf7uCMZ+tFabJMpJkPvK/4r5H5n5Ue8yVDb/co9w4cOy/2FiMXa/Ocj2p6N4x+0pnGcU1jOo0KzY+d35icWCHtDllzIPnKXcywTC82P/Jd/4QArBmJiuiY/kdafagZD8tv5EZ2fCPGXjX+dH0XDbxIm3FZtLHJDAAAAAElFTkSuQmCC" alt="drone-bottom-view"
            className="h-8 w-8 rounded-full"
          />
            </Link>
          </li>
          <li>
            <Link to=''>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE4AAABOCAYAAACOqiAdAAAACXBIWXMAAAsTAAALEwEAmpwYAAACdklEQVR4nO3b3YtNURzG8W8khDIuJkYyXsrLPyAXUxJR/gyhSWqSUEMG5UqdJlNcuCGJmn9BSYxCI3ExTeKCS0omlJcZrVq7tMOZc/Y6a/3W2c+nnpu5OP1+T+fs5uy1D4iIiIiIiEiXWw7sB84Dd4EJ4IXPhP/bCLAPWJZ6WAt2A3eAb8DcPPMVuA3sooZ2Ao9bKOtfeQTsoAaWAGPArwClFXGvNQospkv1AZMBCyvnGbCGLrMReNvB0oq8ATbQJVYDryOUVmQa6CVzC4B7EUsrch9YSMbOJCityGkytanF/89C5wuwngzdSFhaketkZh3w3UBxboa1ZGTYQGlFTpGR5wYKK/KUTKwK/JWqan4CPWRgr4GyynF3Ycw7aqCocgbJwIiBoso5RwYuGyiqHDeTeQ0DRZXjZjKvYaAoFYeKQ++4JvRRbVPDwDVN1zhUHHrHNaGPapsaBq5p2Vzj+vwX6Sv+eG7OWKb9bIN+1uR6gGvADwPlzDdu1qvAylSl9QNTBopoN1N+h6hWAK8MLF81L/2zedFcMrB0qFyMVdpSYMbAwqHy2T9+1nEHDCwbOu4x2o47bmDR0BmKUdxZA4uGjtup4w4ZWDR0DsYobruBRUNnC5FMGlg25LPDUU/rZw0sXTWzKU75LxhYvGrc4XkSJzP7gl/EzXyCxLYBt4BPBgppFjfjTWArhiwCNgMDwB5jGfCzuRmlzvr9r27aSfR7aZa8r3C9ekeNPaxQ3ANqbLiOv5wJodffSGy1tBn/47paG2qjuGOph7ZirIXS3Pmo/OEI8PE/hX3w9wLlL9wh8WFgHHjiM+4LS3aALCIiIiIiIsT0GyBaF+RJ4XL0AAAAAElFTkSuQmCC" alt="external-Notifications-interface-glyph-silhouettes-icons-papa-vector"
            className="h-8 w-8 rounded-full"
          />
            </Link>
          </li>
          <li>
            <Link to=''>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC2UlEQVR4nO2av2sUQRTHP8FgUHMngtHCHwg5UCNioqIRS7HRXi099A8wxM4YECGiYv6CWNl5iIWtgoVGLKKthSjmULhYaZFc7pJbGXgLy7ruzszO3e6d+cIXApmbed/deTvffW9hA/8H7gPrgBdiE5iki1CNEOHzA12CItCKEVIH+ukCjMeI8HkoywD3AxPAUMK4soaQSwlzDAE3gH04xgHgqwRRAy7GjH2oIeROzO/PAd9lnMq1kisRpYjkVTnwCBgIjd0BvNEQ8goohH67WS5COL8WgeF2iAjyIzAiefEcWNUQ4XMZeAIcBQ4CCzFjU4nZmyDCZ8Mg+CiqO7CiMW4R2GMjRCdpO82rNkK2Ap9yELwn/AwMYokTDraOCzaB06TEdA6ETOEAyk7MZyjiLbAJRyhltMWWXZwhQZzJ6G6sA0dcCnlhGICyMbeAUWCbcEz2es1wrjlXInbJU0N34acR9iMI9b+KwXy/gC227xPKclwXP/XeUESfxhp9hmJeAw/kkD6VcKG4JzbAdj/XkhaIuGBLKdb7JjH/hbWUialywhS3U665FjVp3OupDo9ZCBlLuWarHUJsfFAhj0IKFkKKeRQympet1cjA2KU1pI2oSW9K8azeocfvduCn5Vp1iXUyye2q9/DLwIxmMcFnxeBAfGYw70vgrpSRDtsW+EwtSkWSOO5OmIj4bWtRXJjGJTnsjstjeVD+nrbYTo/pARvfcm3jRwy3lyuuSM3LCQakEOdlxAWpQqbGbIYiPKEqpabCeQcnvqtcuWArYifwIwcivMCBu9tGyEQOgvdCVD0Tq8aOThF7tUNF7KrE1Ja2wjsZMy6ntW1bYTihCFh10fCJEtOUU7o/otEzr1lMCBtMVU2cinDhTrtWwdbbF+Bsyse1MoD/wslAF8CpiGDjpyzFtjhc0xByRaOlUbZt7HTSlykrnnsUe+WDgZ75hAOpAPbERzUbwBJ/AGHShFfzN0J6AAAAAElFTkSuQmCC" alt="settings"
           className="h-8 w-8 rounded-full"
          />
            </Link>
          </li>
          
        </ul>
    </div>
  )
}

export default BottomNavigationBar