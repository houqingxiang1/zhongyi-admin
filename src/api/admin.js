import request from '../utils/request'

export function getAccount() {
  return request({
    url: '/admin/account',
    method: 'get'
  })
}
export function deleteAccount(id) {
  return request({
    url: `/admin/account/${id}`,
    method: 'delete',
    
  })
}
export function addTreatment(data) {
  return request({
    url: '/admin/treatment',
    method: 'post',
    data
  })
}
export function addBody(data) {
    return request({
      url: '/admin/body',
      method: 'post',
      data
    })
  }
  export function addSymptom(data) {
    return request({
      url: '/admin/symptom',
      method: 'post',
      data
    })
  }
  export function addQuestion(data) {
    return request({
      url: '/admin/question',
      method: 'post',
      data
    })
  }
  export function updateQuestion(data) {
    return request({
      url: `/admin/question/${data.id}`,
      method: 'post',
      data
    })
  }
  export function deleteQuestion(id) {
    return request({
      url: `/admin/question/${id}`,
      method: 'delete',
      
    })
  }
  export function getQuestionList() {
    return request({
      url: '/admin/question',
      method: 'get',
    })
  }
  export function getSymptomList() {
    return request({
      url: '/admin/symptom',
      method: 'get',
    })
  }
  export function updateSymptom(data) {
    return request({
      url: `/admin/symptom/${data.id}`,
      method: 'post',
      data
    })
  }
  export function deleteSymptom(id) {
    return request({
      url: `/admin/symptom/${id}`,
      method: 'delete',
      
    })
  }
  export function getBodyList() {
    return request({
      url: '/admin/body',
      method: 'get',
    })
  }
  export function updateBody(data) {
    return request({
      url: `/admin/body/${data.id}`,
      method: 'post',
      data
    })
  }
  export function deleteBody(id) {
    return request({
      url: `/admin/body/${id}`,
      method: 'delete',
      
    })
  }

  export function getFangjiList() {
    return request({
      url: '/admin/treatment',
      method: 'get',
    })
  }
  export function updateFangji(data) {
    return request({
      url: `/admin/treatment/${data.id}`,
      method: 'post',
      data
    })
  }
  export function deleteFangji(id) {
    return request({
      url: `/admin/treatment/${id}`,
      method: 'delete',
      
    })
  }
  export function dashboard() {
    return request({
      url: `/admin/dashboard`,
      method: 'get',
      
    })
  }
  export function addReference(data) {
    return request({
      url: '/admin/reference',
      method: 'post',
      data
    })
  }
  export function getReferenceList() {
    return request({
      url: '/admin/reference',
      method: 'get',
    })
  }
  export function updateReference(data) {
    return request({
      url: `/admin/reference/${data.id}`,
      method: 'post',
      data
    })
  }
  export function deleteReference(id) {
    return request({
      url: `/admin/reference/${id}`,
      method: 'delete',
      
    })
  }

  export function addTreatmentCategory(data) {
    return request({
      url: '/admin/treatmentCategory',
      method: 'post',
      data
    })
  }
  export function getTreatmentCategoryList() {
    return request({
      url: '/admin/treatmentCategory',
      method: 'get',
    })
  }
  export function updateTreatmentCategory(data) {
    return request({
      url: `/admin/treatmentCategory/${data.id}`,
      method: 'post',
      data
    })
  }
  export function deleteTreatmentCategory(id) {
    return request({
      url: `/admin/treatmentCategory/${id}`,
      method: 'delete',
      
    })
  }

  export function addJingluo(data) {
    return request({
      url: '/admin/jingluo',
      method: 'post',
      data
    })
  }
  export function getJingluoList() {
    return request({
      url: '/admin/jingluo',
      method: 'get',
    })
  }
  export function updateJingluo(data) {
    return request({
      url: `/admin/jingluo/${data.id}`,
      method: 'post',
      data
    })
  }
  export function deleteJingluo(id) {
    return request({
      url: `/admin/jingluo/${id}`,
      method: 'delete',
      
    })
  }



  export function addXueweiCategory(data) {
    return request({
      url: '/admin/xueweiCategory',
      method: 'post',
      data
    })
  }
  export function getXueweiCategoryList() {
    return request({
      url: '/admin/xueweiCategory',
      method: 'get',
    })
  }
  export function updateXueweiCategory(data) {
    return request({
      url: `/admin/xueweiCategory/${data.id}`,
      method: 'post',
      data
    })
  }
  export function deleteXueweiCategory(id) {
    return request({
      url: `/admin/xueweiCategory/${id}`,
      method: 'delete',
      
    })
  }

  export function addXuewei(data) {
    return request({
      url: '/admin/xuewei',
      method: 'post',
      data
    })
  }
  export function getXueweiList() {
    return request({
      url: '/admin/xuewei',
      method: 'get',
    })
  }
  export function updateXuewei(data) {
    return request({
      url: `/admin/xuewei/${data.id}`,
      method: 'post',
      data
    })
  }
  export function deleteXuewei(id) {
    return request({
      url: `/admin/xuewei/${id}`,
      method: 'delete',
      
    })
  }


  export function addFood(data) {
    return request({
      url: '/admin/food',
      method: 'post',
      data
    })
  }
  export function updateFood(data) {
    return request({
      url: `/admin/food/${data.id}`,
      method: 'post',
      data
    })
  }
  export function deleteFood(id) {
    return request({
      url: `/admin/food/${id}`,
      method: 'delete',
      
    })
  }
  export function getFoodList() {
    return request({
      url: '/admin/food',
      method: 'get',
    })
  }

