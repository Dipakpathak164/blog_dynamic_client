 import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Write = () => {
  const [value, setValue] = useState('');
  console.log(value)
  return (
    <div className='container my-5'>
       <div className="row">
          <div className="col-md-8">
            <div className="editor_container">
            <ReactQuill theme="snow" className='editor' value={value} onChange={setValue} />
            </div>
          </div>
          <div className="col-md-4">
            <div className='items'>
             <h3>Publish</h3>
             <span className='me-2'><b>Status : </b>Draft</span>
             <span><b>Visibility : </b>Public</span>
             <div>
                <input style={{display:"none"}} type="file" name="" id="file" />
                <label htmlFor="file" className='upload_label'>Upload Image</label>
             </div>
             <div className="buttons mt-4">
                 <button className="btn btn-primary btn-primary_second">
                   Save as draft
                 </button>
                 <button className="btn btn-primary_green btn-primary">
                   Update
                 </button>
             </div>
             </div>
             <div className='items category mt-3'>
                <h3>Category</h3>
                 <div className='cat'>
                 <input type="radio" name='art' value="art" id='art'/>
                  <label htmlFor="art">Art</label>
                 </div>
                <div className='cat'>
                <input type="radio" name='science' value="science" id='science'/>
                <label htmlFor="science">Science</label>
                </div>
                <div className='cat'>
                <input type="radio" name='technology' value="technology" id='technology'/>
                <label htmlFor="technology">Technology</label>
                </div>
                <div className='cat'>
                <input type="radio" name='cinema' value="cinema" id='cinema'/>
                <label htmlFor="cinema">Cinema</label>
                </div>
                <div className='cat'>
                <input type="radio" name='design' value="design" id='design'/>
                <label htmlFor="design">Design</label>
                </div>
                <div className='cat'>
                <input type="radio" name='food' value="food" id='food'/>
                <label htmlFor='food'>Food</label>
                </div>
             </div>
          </div>
       </div>
    </div>
  )
}

export default Write
