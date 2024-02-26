import React from 'react'

const InstagramButton = () => {
  return (
    <div className="basis-12/12 instagramAlign relative">
        <div className="basis-4/12 flex justify-center">
          <a href="https://www.instagram.com/planetseraspices/" className="instagramBtn mt-6">
            Visit Our Instagram
            <i
              class="fa fa-instagram self-center"
              aria-hidden="true"
              style={{ fontSize: "19px" }}
            ></i>
          </a>
        </div>
      </div>
  )
}

export default InstagramButton