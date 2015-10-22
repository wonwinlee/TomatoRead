/**
 * Created by everettjf on 10/22/15.
 */

function serverUrl(partialUrl){
    return 'http://0.0.0.0:5000/' + partialUrl;
}

function jsonPost(relativeUrl,parameter,done,fail){
    $.ajax({
        type:'POST',
        url:serverUrl(relativeUrl),
        data:JSON.stringify(parameter),
        dataType:'json',
        contentType:'application/json; charset=utf-8'
    }).done(function(data){
        console.log('succeed:' + relativeUrl);
        done(data);
    }).fail(function(resp){
        console.log('fail('+ resp.status + '):' + relativeUrl);
        fail();
    });
}

// Helper
function apiCurrentUser(done,fail){
    jsonPost('api/user/current_user',{
        endpoint:'chrome'
    },
        done,
        fail
    );
}

function apiAddLink(req,done,fail){
    jsonPost('api/link/add',
        req,
        done,
        fail
    );
}

function apiIsExistLink(req,done,fail){
    jsonPost('api/link/exist',
        req,
        done,
        fail
    );
}