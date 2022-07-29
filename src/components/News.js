import React, { Component } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'
import '../css/style.css'
import newsImg from '../images/newsimg.jpg'
import Spiner from './Spiner';
import Error from './Error'
// import InfiniteScroll from 'react-infinite-scroll-component';
export class News extends Component {
    static defaultProps={
        category:'top',
        pageSize:10
    }
    static propTypes={
        title:PropTypes.string,
        pageSize:PropTypes.number,
        category:PropTypes.string
    }
   
    
    constructor(props)
    {
        super(props);

        this.state={
            articles:[],
            loading:true,
            page:10,
            totalPages:1,
            errorFlag:0,
            totalResults:0
        }
        document.title=`News ${this.props.category}`
    }
    CheckError =(response)=> {
        if (response.status >= 200 && response.status <= 299) {
          return response;
        } else {
            
            this.setState(
                {
                    errorFlag:1
                }
            );
          
        }
      }
    async updateData(pageNo)
    {
        this.props.setProgress(10)

        let url=`https://newsdata.io/api/1/news?apikey=${this.props.apiKey}&page=${pageNo}&category=${this.props.category}`;

        this.setState({
            loading:true
        })
        let resp=await fetch(url).then(this.CheckError)
        if(resp===0)
        {
            console.log("error")
    
        }
        else{
            let respData=await resp.json();
            this.setState({
                articles:respData.results,
                totalPages:respData.totalResults/this.props.pageSize,
                loading:false,
                totalResults:respData.totalResults
            })
            
           
        }
        this.props.setProgress(100)


    }
    async componentDidMount()
    {
        this.updateData(1)
        
    }
    handleNextClick = async()=>
    {
        this.setState(
            {
               
                page:this.state.page+1
            })
        this.updateData(this.state.page)
    }
    handlePreviousClick= async ()=>
    {
        this.setState({
            page:this.state.page-1
        })
        this.updateData(this.state.page)
    }
    fetchMoreData = async()=>{
        
        this.setState({
            page:this.state.page+1
        })
        console.log(this.state.page)
        let url=`https://newsdata.io/api/1/news?apikey=pub_9628988648c41baa85577f0d420f3461ca56&page=${this.state.page}&category=${this.props.category}`;

        this.setState({
            loading:true
        })
        let resp=await fetch(url).then(this.CheckError)
        if(resp===0)
        {
            console.log("error")
    
        }
        else{
            let respData=await resp.json();
            this.setState({
                articles:this.state.articles.concat( respData.results),
                totalPages:respData.totalResults/this.props.pageSize,
                loading:false,
                totalResults:respData.totalResults
            })
            
            console.log(this.state.articles)
        }
    }

  render() {
    if(this.state.errorFlag===0)
    {

    
     if(this.state.loading==false)
    {
        
        
    return (
      
      <div>
        
        <h1 style={{textAlign:'center'}}>{`Top Headlines on ${this.props.category}`}</h1>
        {/*Put the scroll bar always on the bottom*/}
         {/* <InfiniteScroll
           dataLength={this.state.articles.length}
           
            
            // console.log(this.state.articles.length)
           
           next={this.fetchMoreData}
           style={{ display: 'flex', flexDirection: 'column-reverse' }} //To put endMessage and loader to the top.
           inverse={true} //
           hasMore={this.state.articles.length !== this.state.totalResults}
           loader={<h4>Loading...</h4>}
           scrollableTarget="scrollableDiv"
         > */}

            <div className="news-container">


            {
            this.state.articles.map((element)=>{
             

            return <NewsItem key={element.url} title={element.title} description={element.description} imgurl={element.image_url !=null?element.image_url:newsImg} uniqeUrl={element.link} pubDate={element.pubDate} source_id={element.source_id} />
            })
            }
            </div>
        {/* </InfiniteScroll> */}
        
        <div className="btn-cont">
        <button disabled={this.state.page<=1} type='button' className='btn btn-primary' onClick={this.handlePreviousClick} >&larr; Previous</button>
        <button disabled={this.state.page>=this.state.totalPages} type='button' className='btn btn-primary'onClick={this.handleNextClick} >Next &rarr;</button>

        </div>

      </div>
    )
    }
     else{
         return(
           <Spiner/>
         )
     }
    

    }
    else{
        return (
            <Error/>
        )
    }
  }
}



export default News
